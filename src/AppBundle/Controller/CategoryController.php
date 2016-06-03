<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Category;
use Symfony\Component\HttpFoundation\RedirectResponse;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use AppBundle\Form\CategoryType;

class CategoryController extends Controller
{
    public function indexAction()
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $categories = $this->getDoctrine()
                   ->getRepository('AppBundle:Category')
                   ->findAll();

           return $this->render('AppBundle:Category:index.html.twig', array(
                   'categories' => $categories
               ));
        }
    }

    public function createAction(Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $category = new Category();
            $form = $this->get('form.factory')->create(new CategoryType(), $category);

            $form->handleRequest($request);
            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($category);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Category is created'));

                return $this->redirect($this->generateUrl('app_backofficebundle_category_index'));
            }

            return $this->render('AppBundle:Category:view.html.twig', array(
                    'form' => $form->createView(),
                    'category' => $category
                ));
        }
    }

    public function updateAction(Category $category, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $form = $this->get('form.factory')->create(new CategoryType(), $category);

            $form->handleRequest($request);
            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->persist($category);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Category is created'));

                return $this->redirect($this->generateUrl('app_backofficebundle_category_index'));
            }

            return $this->render('AppBundle:Category:view.html.twig', array(
                    'form' => $form->createView(),
                    'category' => $category
                ));
        }
    }

    public function deleteAction(Category $category, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            if (is_null($request->request->get('action_value'))) {
                return $this->render('AppBundle:Category:delete.html.twig', array('category' => $category));
            }else if ($request->request->get('action_value') == 1) {
                $em = $this->getDoctrine()->getManager();
                $em->remove($category);
                $em->flush();

                return $this->redirect($this->generateUrl('app_backofficebundle_category_index'));
            } else if ($request->request->get('action_value') == 0) {
                return $this->redirect($this->generateUrl('app_backofficebundle_category_index'));
            }
        }
    }

    public function displayAction(Category $category)
    {
        $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getAllArticlesByCategory($category);

        return $this->render('AppBundle:Category:display.html.twig', array(
            'articles' => $articles,
            'category' => $category
        ));
    }
}