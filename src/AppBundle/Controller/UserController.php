<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\RedirectResponse;

class UserController extends Controller
{
    public function indexAction()
    {
        $userManager = $this->get('fos_user.user_manager');
        $users = $userManager->findUsers();

        return $this->render('AppBundle:User:index.html.twig', array('users' => $users));
    }

    public function updateAction(User $user, Request $request)
    {
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

            return new RedirectResponse($this->generateUrl('app_backofficebundle_users'));
        }

        return $this->render('AppBundle:User:view.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    public function deleteAction(Request $request)
    {
        $userManager = $this->get('fos_user.user_manager');
        $users = $userManager->findUsers();

        return $this->render('AppBundle:User:index.html.twig', array('users' => $users));
    }
}
