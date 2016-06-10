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

class ContactController extends Controller
{
    public function indexAction(Request $request)
    {
        $parameters = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1);
        $contact = new Contact();
        $form = $this->get('form.factory')->create(new ContactType(), $contact);
        $form->handleRequest($request);
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();
            $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Your message was sent !'));

            return $this->redirect($this->generateUrl('app_contact_general'));
        }

        return $this->render('AppBundle:Contact:index.html.twig', array(
            'form' => $form->createView(),
            'parameters' => $parameters
        ));
    }


}