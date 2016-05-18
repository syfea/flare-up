<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Subscriber;
use AppBundle\Form\SubscriberType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class SubscriberController extends Controller
{
    public function indexAction(Request $request)
    {
        $subscriber = new Subscriber();
        $form = $this->get('form.factory')->create(new SubscriberType(), $subscriber);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $subscriberSearch = $this->getDoctrine()
                ->getRepository('AppBundle:Subscriber')
                ->findByEmail($subscriber->getEmail());

            if (count($subscriberSearch) == 0) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($subscriber);
                $em->flush();
                $subscriber = new Subscriber();
                $form = $this->get('form.factory')->create(new SubscriberType(), $subscriber);
                $request->getSession()->getFlashBag()->add('notice', 'Vous êtes bien enregistré à notre newsletter.');
            } else {
                $request->getSession()->getFlashBag()->add('error', 'Cette adresse email est déjà inscrite à notre newsletter.');
            }

        }

        return $this->render('AppBundle:Default:subscriber.html.twig', array('form' => $form->createView()));
    }
}
