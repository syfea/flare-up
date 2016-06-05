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

class ContactController extends Controller
{
    public function indexAction()
    {
        $parameters = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1); 

        return $this->render('AppBundle:Contact:index.html.twig', array(
            'parameters' => $parameters
        ));
    }
}