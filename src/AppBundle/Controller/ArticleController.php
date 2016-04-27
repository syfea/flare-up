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

            $form->handleRequest($request);
            if ($form->isValid()) {
                $article->updatedAt = new \Datetime();
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
}