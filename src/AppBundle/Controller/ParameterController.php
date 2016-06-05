<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Parameter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use AppBundle\Form\ParameterType;

class ParameterController extends Controller
{
    public function indexAction(Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $parameter = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1);

            $form = $this->get('form.factory')->create(new ParameterType(), $parameter);
            $form->handleRequest($request);
            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($parameter);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Parameters are updated'));

                return $this->redirect($this->generateUrl('app_backofficebundle_parameter_index'));
            }

            return $this->render('AppBundle:Parameter:index.html.twig', array(
                'form' => $form->createView(),
            ));
        }
    }
}