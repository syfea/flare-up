<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Comment;
use AppBundle\Form\CommentType;
use AppBundle\Entity\Article;

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
               ));
    }
}