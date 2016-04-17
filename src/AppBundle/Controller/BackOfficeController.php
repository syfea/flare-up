<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BackOfficeController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle:Default:dashboard.html.twig');
    }
}
