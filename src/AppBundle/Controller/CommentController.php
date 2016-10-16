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

    public function saveAction(Request $request)
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

                // sent mail for the admins
                $users = $this->getDoctrine()
                    ->getRepository('AppBundle:User')
                    ->fetchByRoles(array('ROLE_SUPER_ADMIN'));

                $sendAutor = false;
                foreach ($users as $user) {
                    if ($article->getUser()->getEmail() == $user->getEmail()) {
                        $sendAutor = true;
                    }
                    $message = \Swift_Message::newInstance();
                    $url = $message->embed(\Swift_Image::fromPath('bundles/app/images/logo_233.png'));
                    $message->setSubject('Commentaire - Flare Up')
                        ->setFrom('flareup42@gmail.com')
                        ->setTo($user->getEmail())
                        ->setBody(
                            $this->renderView(
                                'Emails/comment.html.twig',
                                array(
                                    'name' => $comment->getUsername(),
                                    'url' => $url,
                                    'urlArticle' => $request->server->get('HTTP_HOST').$article->getUrl(),
                                    'nameArticle' => $article->getTitle(),
                                    'message' => $comment->getMessage()

                                )
                            ),
                            'text/html'
                        )
                    ;
                    $this->get('mailer')->send($message);
                }

                // sent mail for the author
                if ($sendAutor) {
                    $message = \Swift_Message::newInstance();
                    $url = $message->embed(\Swift_Image::fromPath('bundles/app/images/logo_233.png'));
                    $message->setSubject('Commentaire - Flare Up')
                        ->setFrom('flareup42@gmail.com')
                        ->setTo($article->getUser()->getEmail())
                        ->setBody(
                            $this->renderView(
                                'Emails/comment.html.twig',
                                array(
                                    'name' => $comment->getUsername(),
                                    'url' => $url,
                                    'urlArticle' => $request->server->get('HTTP_HOST').$article->getUrl(),
                                    'nameArticle' => $article->getTitle(),
                                    'message' => $comment->getMessage()

                                )
                            ),
                            'text/html'
                        )
                    ;
                    $this->get('mailer')->send($message);
                }

                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Your comment is created'));
            } else {
                $request->getSession()->getFlashBag()->add('error', $this->get('translator')->trans('Your comment is created'));
            }
        }

        return new Response();
    }
}