<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;

class PageController extends Controller
{
    public function disclamerAction()
    {
        $parameter = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1);

        return $this->render('AppBundle:Page:disclamer.html.twig', array(
            'parameter' => $parameter
        ));
    }
}