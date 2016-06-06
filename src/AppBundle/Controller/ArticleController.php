<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Article;
use Symfony\Component\HttpFoundation\RedirectResponse;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use AppBundle\Form\ArticleType;
use AppBundle\Entity\Analytics;

class ArticleController extends Controller
{
    public function indexAction()
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $articles = $this->getDoctrine()
                   ->getRepository('AppBundle:Article')
                   ->findAll();

           return $this->render('AppBundle:Article:index.html.twig', array(
                   'articles' => $articles
               ));
        } else {
            $user = $this->container->get('security.context')->getToken()->getUser();

            $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->findByUser($user);

            return $this->render('AppBundle:Article:index.html.twig', array(
                'articles' => $articles
            ));
        }
    }

    public function createAction(Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $article = new Article();
            $form = $this->get('form.factory')->create(new ArticleType(), $article);

            $form->handleRequest($request);
            if ($form->isValid()) {
                $user = $this->container->get('security.context')->getToken()->getUser();
                $article->setUser($user);
                /** @var UploadedFile $file */
                $file = $article->getPicture();
                if (!is_null($file)) {
                    $fileName = md5(uniqid()).'.'.$file->guessExtension();
                    $brochuresDir = $this->container->getParameter('kernel.root_dir').'/../web/uploads/article';
                    $file->move($brochuresDir, $fileName);
                    $article->setPicture($fileName);
                }
                $article->setStatus('draft');
                $em = $this->getDoctrine()->getManager();
                $em->persist($article);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Article is created'));

                return $this->redirect($this->generateUrl('app_backofficebundle_article_index'));
            }

            return $this->render('AppBundle:Article:view.html.twig', array(
                    'form' => $form->createView(),
                    'article' => $article
                ));
        }
    }

    public function updateAction(Article $article, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $form = $this->get('form.factory')->create(new ArticleType(), $article);

            $fileName = $article->getPicture();
            $form->handleRequest($request);
            if ($form->isValid()) {
                /** @var UploadedFile $file */
                $file = $article->getPicture();
                if (!is_null($file)) {
                    $fileName = md5(uniqid()).'.'.$file->guessExtension();
                    $brochuresDir = $this->container->getParameter('kernel.root_dir').'/../web/uploads/article';
                    $file->move($brochuresDir, $fileName);
                }

                $article->setPicture($fileName);
                $article->setUpdatedAt(new \Datetime());
                $em = $this->getDoctrine()->getManager();
                $em->persist($article);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Article is updated'));

                return $this->redirect($this->generateUrl('app_backofficebundle_article_index'));
            }

            return $this->render('AppBundle:Article:view.html.twig', array(
                    'form' => $form->createView(),
                    'article' => $article
                ));
        }
    }

    public function displayAction(Article $article, Request $request)
    {
        $datetime = new \DateTime("now");
        if ((!is_null($article->getPublishedAt()) && $article->getPublishedAt() < $datetime) || $this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $userArticles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getRecentArticleByUser(5);

            if ((!is_null($article->getPublishedAt()) && $article->getPublishedAt() < $datetime)) {
                $analytics = $this->container->getParameter('analytics');
                $analytics_file = $this->get('kernel')->getRootDir() . '/Resources/'.$analytics['name_file'];

                $page = array('filters' => 'ga:pagePath=~/article/'.$article->getId().'/*');
                $analytic = new Analytics();
                $analytics = $analytic->getService($analytics, $analytics_file);
                $profile = $analytic->getFirstProfileId($analytics);
                $uView = $analytic->getArticlesResults($analytics, $profile, $article->getPublishedAt()->format('Y-m-d'), $datetime->format('Y-m-d'), $page);
            } else {
                $uView['avgTimeOnSite'] = 0;
                $uView['users'] = 0;
                $uView['pageViews'] = 0;
            }

            return $this->render('AppBundle:Article:display.html.twig', array(
                'article' => $article,
                'userArticles' => $userArticles,
                'u' => $uView
            ));
        }



        return $this->redirect($this->generateUrl('app_default_homepage'));
    }

    public function publishAction(Article $article)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $datetime = new \DateTime("now");
            if($article->getStatus() == 'publish') {
                $article->setStatus('wait');
                $article->setPublishedAt(null);
            } else {
                $article->setStatus('publish');
                $article->setPublishedAt($datetime);
            }


            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('app_backofficebundle_article_index'));
    }

    public function askAction(Article $article)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $article->setStatus('wait');

            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('app_backofficebundle_article_index'));
    }

    public function deleteAction(Article $article, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            if (is_null($request->request->get('action_value'))) {
                return $this->render('AppBundle:Article:delete.html.twig', array('article' => $article));
            }else if ($request->request->get('action_value') == 1) {
                $em = $this->getDoctrine()->getManager();
                $em->remove($article);
                $em->flush();

                return $this->redirect($this->generateUrl('app_backofficebundle_article_index'));
            } else if ($request->request->get('action_value') == 0) {
                return $this->redirect($this->generateUrl('app_backofficebundle_article_index'));
            }
        }
    }
}