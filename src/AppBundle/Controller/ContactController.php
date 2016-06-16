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

        //echo $this->container->get('templating.helper.assets')->getUrl('bundles/app/images/logo-footer.png');
        if ($form->isValid()) {
            $users = $this->getDoctrine()
                ->getRepository('AppBundle:User')
                ->fetchByRoles(array('ROLE_SUPER_ADMIN'));

            foreach ($users as $user) {
                foreach ($users as $user) {
                    $contact->setUser($user);

                    $message = \Swift_Message::newInstance();
                    $url = $message->embed(\Swift_Image::fromPath('bundles/app/images/logo_233.png'));
                    //$urlImage = $message->embed(\Swift_Image::fromPath($this->container->get('templating.helper.assets')->getUrl('bundles/app/images/logo-footer.png')));
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

                    $em = $this->getDoctrine()->getManager();
                    $em->persist($contact);
                    $em->flush();
                }
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

}