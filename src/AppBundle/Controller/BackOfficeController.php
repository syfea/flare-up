<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Form\Type\ProfileType;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;

class BackOfficeController extends Controller
{
    public function indexAction()
    {
        return $this->render('AppBundle:Default:dashboard.html.twig');
    }

    public function myaccountAction(Request $request)
    {
        $user = $this->container->get('security.context')->getToken()->getUser();

        $form = $this->createFormBuilder($user)
            ->add('id', 'hidden')
            ->add('firstname', 'text')
            ->add('lastname', 'text')
            ->add('username', 'text')
            ->add('email', 'text')
            ->add('zip_code', 'text', ['required' => false])
            ->add('address', 'text', ['required' => false])
            ->add('city', 'text', ['required' => false])
            ->add('phone', 'text', ['required' => false])
            ->add('facebook', 'text', ['required' => false])
            ->add('twitter', 'text', ['required' => false])
            ->add('skype', 'text', ['required' => false])
            ->add('about_me', 'textarea')
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return new RedirectResponse($this->generateUrl('app_backofficebundle_myaccount'));
        }

        return $this->render('AppBundle:Profile:myaccount.html.twig', array(
            'form' => $form->createView(),
        ));
    }
}
