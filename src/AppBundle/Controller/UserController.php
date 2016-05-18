<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\RedirectResponse;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;


class UserController extends Controller
{
    public function indexAction()
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $userManager = $this->get('fos_user.user_manager');
            $users = $userManager->findUsers();

            return $this->render('AppBundle:User:index.html.twig', array('users' => $users));
        }
    }

    public function createAction(Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            /** @var $formFactory \FOS\UserBundle\Form\Factory\FactoryInterface */
            $formFactory = $this->get('fos_user.registration.form.factory');
            /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
            $userManager = $this->get('fos_user.user_manager');
            /** @var $dispatcher \Symfony\Component\EventDispatcher\EventDispatcherInterface */
            $dispatcher = $this->get('event_dispatcher');

            $user = $userManager->createUser();
            $user->setEnabled(true);

            $event = new GetResponseUserEvent($user, $request);
            $dispatcher->dispatch(FOSUserEvents::REGISTRATION_INITIALIZE, $event);

            if (null !== $event->getResponse()) {
                return $event->getResponse();
            }

            $form = $formFactory->createForm();
            $form->add('firstname', 'text')
                ->add('lastname', 'text')
                ->add('address', 'text', ['required' => false])
                ->add('city', 'text', ['required' => false])
                ->add('phone', 'text', ['required' => false])
                ->add('zip_code', 'text', ['required' => false])
                ->add('facebook', 'text', ['required' => false])
                ->add('twitter', 'text', ['required' => false])
                ->add('skype', 'text', ['required' => false])
                ->add('vignet', 'file', array('data_class' => null, 'required' => false))
                ->add('about_me', 'textarea');
            $form->setData($user);

            $form->handleRequest($request);

            if ($form->isValid()) {
                /** @var UploadedFile $file */
                $file = $user->getVignet();
                if (!is_null($file)) {
                    $fileName = md5(uniqid()).'.'.$file->guessExtension();
                    $brochuresDir = $this->container->getParameter('kernel.root_dir').'/../web/uploads/vignet';
                    $file->move($brochuresDir, $fileName);
                }
                $user->setRoles($request->request->get('roles'));

                $event = new FormEvent($form, $request);
                $dispatcher->dispatch(FOSUserEvents::REGISTRATION_SUCCESS, $event);

                $userManager->updateUser($user);

                if (null === $response = $event->getResponse()) {
                    $url = $this->generateUrl('fos_user_registration_confirmed');
                    $response = new RedirectResponse($url);
                }

                $dispatcher->dispatch(FOSUserEvents::REGISTRATION_COMPLETED, new FilterUserResponseEvent($user, $request, $response));

                return $response;
            }

            return $this->render('AppBundle:User:view.html.twig', array(
                'form' => $form->createView(),
                'password' => true,
                'user' => $user
            ));
        }
    }

    public function updateAction(User $user, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
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
                ->add('vignet', 'file', array('data_class' => null, 'required' => false))
                ->add('about_me', 'textarea')
                ->getForm();

            $fileName = $user->getVignet();
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {
                /** @var UploadedFile $file */
                $file = $user->getVignet();
                if (!is_null($file)) {
                    $fileName = md5(uniqid()).'.'.$file->guessExtension();
                    $brochuresDir = $this->container->getParameter('kernel.root_dir').'/../web/uploads/vignet';
                    $file->move($brochuresDir, $fileName);
                }

                $user->setVignet($fileName);
                $user->setRoles($request->request->get('roles'));

                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();

                return new RedirectResponse($this->generateUrl('app_backofficebundle_users'));
            }

            return $this->render('AppBundle:User:view.html.twig', array(
                'form' => $form->createView(),
                'password' => false,
                'user' => $user
            ));
        }
    }

    public function deleteAction(User $user, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
                return $this->render('AppBundle:User:delete.html.twig', array('user' => $user));
            }
        }
    }
}
