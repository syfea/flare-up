<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Comment;
use AppBundle\Form\CommentType;
use AppBundle\Entity\Article;
use Symfony\Component\HttpFoundation\Response;

class CommentController extends Controller
{
    public function displayAction(Request $request, Article $article)
    {
        $comment = new Comment();
        $comment->setArticle($article);
        $form = $this->get('form.factory')->create(new CommentType(), $comment);

        $form->handleRequest($request);


        if ($form->isValid()) {
            echo 'stop';
            //$this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN');
            //var_dump($this->container->get('security.authorization_checker')->isUser());
            exit();
        }

        return $this->render('AppBundle:Comment:display.html.twig', array(
                    'form' => $form->createView(),
                    'article' => $article
               ));
    }

    public function saveAction()
    {
        $request = $this->container->get('request');

        if($request->isXmlHttpRequest())
        {
            $article = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->find($request->request->get('article_id'));

            $comment = new Comment();
            $comment->setArticle($article);
            $comment->setUsername($request->request->get('username'));
            $comment->setEmail($request->request->get('email'));
            $comment->setMessage($request->request->get('message'));
            $comment->setHidden(false);
            if (!is_null($this->getUser())) {
                $comment->setUser($this->getUser());
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();
//
//            if (count($subscriberSearch) == 0) {
//                $em = $this->getDoctrine()->getManager();
//                $em->persist($subscriber);
//                $em->flush();
//                $request->getSession()->getFlashBag()->add('notice', 'Vous êtes bien enregistré à notre newsletter.');
//            } else {
//                $request->getSession()->getFlashBag()->add('error', 'Cette adresse email est déjà inscrite à notre newsletter.');
//            }
        }

        return new Response();
    }
}