<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use AppBundle\Entity\Picture;
use AppBundle\Form\PictureType;

class PictureController extends Controller
{
    public function indexAction()
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $pictures = $this->getDoctrine()
                ->getRepository('AppBundle:Picture')
                ->findAll();

            return $this->render('AppBundle:Picture:index.html.twig', array(
                'pictures' => $pictures
            ));
        } else {
            $user = $this->container->get('security.context')->getToken()->getUser();

            $pictures = $this->getDoctrine()
                ->getRepository('AppBundle:Picture')
                ->findByUser($user);

            return $this->render('AppBundle:Picture:index.html.twig', array(
                'pictures' => $pictures
            ));
        }
    }

    public function createAction(Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $picture = new Picture();
            $form = $this->get('form.factory')->create(new PictureType(), $picture);

            $form->handleRequest($request);
            if ($form->isValid()) {
                $user = $this->container->get('security.context')->getToken()->getUser();
                $picture->setUser($user);
                /** @var UploadedFile $file */
                $file = $picture->getPicture();
                if (!is_null($file)) {
                    $fileName = md5(uniqid()).'.'.$file->guessExtension();
                    $brochuresDir = $this->container->getParameter('kernel.root_dir').'/../web/uploads/picture';
                    $file->move($brochuresDir, $fileName);
                    $picture->setPicture($fileName);
                }
                $picture->setStatus('draft');
                $em = $this->getDoctrine()->getManager();
                $em->persist($picture);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Picture is created'));

                return $this->redirect($this->generateUrl('app_backofficebundle_picture_index'));
            }

            return $this->render('AppBundle:Picture:view.html.twig', array(
                'form' => $form->createView(),
                'picture' => $picture
            ));
        }
    }

    public function updateAction(Picture $picture, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $form = $this->get('form.factory')->create(new PictureType(), $picture);

            $fileName = $picture->getPicture();
            $form->handleRequest($request);
            if ($form->isValid()) {
                /** @var UploadedFile $file */
                $file = $picture->getPicture();
                if (!is_null($file)) {
                    $fileName = md5(uniqid()).'.'.$file->guessExtension();
                    $brochuresDir = $this->container->getParameter('kernel.root_dir').'/../web/uploads/picture';
                    $file->move($brochuresDir, $fileName);
                }

                $picture->setPicture($fileName);
                $picture->setUpdatedAt(new \Datetime());
                $em = $this->getDoctrine()->getManager();
                $em->persist($picture);
                $em->flush();
                $request->getSession()->getFlashBag()->add('notice', $this->get('translator')->trans('Picture is updated'));

                return $this->redirect($this->generateUrl('app_backofficebundle_picture_index'));
            }

            return $this->render('AppBundle:Picture:view.html.twig', array(
                'form' => $form->createView(),
                'picture' => $picture
            ));
        }
    }

    public function displayAction(Picture $picture, Request $request)
    {
        $datetime = new \DateTime("now");
        if (!is_null($picture->getPublishedAt()) && $picture->getPublishedAt() < $datetime) {
            $userPictures = $this->getDoctrine()
                ->getRepository('AppBundle:Picture')
                ->getRecentPictureByUser($picture->getUser(), 5);

            return $this->render('AppBundle:Picture:display.html.twig', array(
                'Picture' => $picture,
                'userPictures' => $userPictures,
            ));
        } elseif ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $userPictures = $this->getDoctrine()
                ->getRepository('AppBundle:Picture')
                ->getRecentPictureByUser($picture->getUser(), 5);

            return $this->render('AppBundle:Picture:display.html.twig', array(
                'Picture' => $picture,
                'userPictures' => $userPictures,
            ));
        } elseif ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            if ($picture->getUser()->getId() != $this->container->get('security.context')->getToken()->getUser()->getId()) {
                return $this->redirect($this->generateUrl('app_default_homepage'));
            }
            $userPictures = $this->getDoctrine()
                ->getRepository('AppBundle:Picture')
                ->getRecentPictureByUser($picture->getUser(), 5);

            return $this->render('AppBundle:Picture:display.html.twig', array(
                'picture' => $picture,
                'userPictures' => $userPictures,
            ));
        }

        return $this->redirect($this->generateUrl('app_default_homepage'));
    }

    public function publishAction(Picture $picture)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $datetime = new \DateTime("now");
            if($picture->getStatus() == 'publish') {
                $picture->setStatus('wait');
                $picture->setPublishedAt(null);
            } else {
                $picture->setStatus('publish');
                $picture->setPublishedAt($datetime);
            }


            $em = $this->getDoctrine()->getManager();
            $em->persist($picture);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('app_backofficebundle_picture_index'));
    }

    public function askAction(Picture $picture)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $picture->setStatus('wait');

            $em = $this->getDoctrine()->getManager();
            $em->persist($picture);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('app_backofficebundle_picture_index'));
    }

    public function deleteAction(Picture $picture, Request $request)
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            if (is_null($request->request->get('action_value'))) {
                return $this->render('AppBundle:Picture:delete.html.twig', array('picture' => $picture));
            }else if ($request->request->get('action_value') == 1) {
                $em = $this->getDoctrine()->getManager();
                $em->remove($picture);
                $em->flush();

                return $this->redirect($this->generateUrl('app_backofficebundle_picture_index'));
            } else if ($request->request->get('action_value') == 0) {
                return $this->redirect($this->generateUrl('app_backofficebundle_picture_index'));
            }
        }
    }

}