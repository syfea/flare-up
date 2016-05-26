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
        $options['user'] = $this->getUser();
        $comment = new Comment();
        $comment->setArticle($article);
        $form = $this->get('form.factory')->create(new CommentType($options), $comment);
        $form->handleRequest($request);

        $comments = $this->getDoctrine()
                ->getRepository('AppBundle:Comment')
                ->getAllCommentsByArticle($article);

        return $this->render('AppBundle:Comment:display.html.twig', array(
                    'form' => $form->createView(),
                    'article' => $article,
                    'comments' => $comments
               ));
    }

    public function saveAction()
    {
        $request = $this->container->get('request');

        if($request->isXmlHttpRequest())
        {
            if ($request->request->get('article_id') != '' && $request->request->get('username') != '' && $request->request->get('email') != '' && $request->request->get('message') != '') {
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

                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Your comment is created'));
            } else {
                $request->getSession()->getFlashBag()->add('error', $this->get('translator')->trans('Your comment is created'));
            }
        }

        return new Response();
    }
}