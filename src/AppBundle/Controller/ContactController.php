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
use AppBundle\Form\ContactType;
use AppBundle\Entity\Contact;
use AppBundle\Entity\User;

class ContactController extends Controller
{
    public function indexAction(Request $request)
    {
        $parameters = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1);
        $contact = new Contact();
        $form = $this->get('form.factory')->create(new ContactType(), $contact);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $users = $this->getDoctrine()
                ->getRepository('AppBundle:User')
                ->fetchByRoles(array('ROLE_SUPER_ADMIN'));

            $em = $this->getDoctrine()->getManager();
            foreach ($users as $user) {
                $contactTmp = new Contact();
                $contactTmp->setEmail($contact->getEmail());
                $contactTmp->setName($contact->getName());
                $contactTmp->setMessage($contact->getMessage());
                $contactTmp->setDateCreated($contact->getDateCreated());
                $contactTmp->setUser($user);

                $em->persist($contactTmp);
                $em->flush();

                $message = \Swift_Message::newInstance();
                $url = $message->embed(\Swift_Image::fromPath('bundles/app/images/logo_233.png'));
                $message->setSubject('Contact - Flare Up')
                    ->setFrom('flareup42@gmail.com')
                    ->setTo($user->getEmail())
                    ->setBody(
                        $this->renderView(
                            'Emails/contact.html.twig',
                            array('name' => $contact->getName(), 'url' => $url )
                        ),
                        'text/html'
                    )
                ;
                $this->get('mailer')->send($message);
            }
            $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Your message was sent !'));

            return $this->redirect($this->generateUrl('app_contact_general'));
        }

        return $this->render('AppBundle:Contact:index.html.twig', array(
            'form' => $form->createView(),
            'parameters' => $parameters
        ));
    }

    public function blockHeaderAction()
    {
        $user = $this->container->get('security.context')->getToken()->getUser();

        return $this->render('AppBundle:Contact:block/header.html.twig', array(
            'contactsNotRead' => $user->getContactsNotRead()
        ));
    }

    public function listAction(Request $request)
    {
        $user = $this->container->get('security.context')->getToken()->getUser();

        $contacts = $this->getDoctrine()
            ->getRepository('AppBundle:Contact')
            ->getAllContactByUser($user);

        return $this->render('AppBundle:Contact:list.html.twig', array(
            'contacts' => $contacts,
        ));
    }

    public function readAction(Contact $contact)
    {
        if (is_null($contact->getDateRead())) {
            $contact->setDateRead(new \Datetime());
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();
        }

        return $this->render('AppBundle:Contact:read.html.twig', array(
            'contact' => $contact
        ));
    }

}