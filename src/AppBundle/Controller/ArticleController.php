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
        }
    }

    public function createAction(Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
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
                $em = $this->getDoctrine()->getManager();
                $em->persist($article);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

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
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
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
                $request->getSession()->getFlashBag()->add('notice', 'Annonce bien enregistrée.');

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

            return $this->render('AppBundle:Article:display.html.twig', array(
                'article' => $article,
                'userArticles' => $userArticles
            ));
        }

        return $this->redirect($this->generateUrl('app_default_homepage'));
    }
}