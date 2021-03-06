<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\SearchType;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return $this->render('AppBundle:Default:index.html.twig');
    }

    public function navbarAction()
    {
        $categories = $this->getDoctrine()
            ->getRepository('AppBundle:Category')
            ->getNavBar();

        return $this->render('AppBundle:Default:navbar.html.twig', array(
            'categories' => $categories
        ));
    }

    public function sidebarAction()
    {
        $categories = $this->getDoctrine()
            ->getRepository('AppBundle:Category')
            ->getNavBar();

        return $this->render('AppBundle:Default:sidebar.html.twig', array(
            'categories' => $categories
        ));
    }

    public function sliderAction()
    {
        $articles = $this->getDoctrine()
            ->getRepository('AppBundle:Article')
            ->getLastPosted();

        return $this->render('AppBundle:Default:slider.html.twig', array(
            'articles' => $articles
        ));
    }

    public function topStoriesAction()
    {
        $articles = $this->getDoctrine()
            ->getRepository('AppBundle:Article')
            ->getTopStories();

        return $this->render('AppBundle:Default:top-stories.html.twig', array(
            'articles' => $articles
        ));
    }

    public function articleListAction()
    {
        $articles = $this->getDoctrine()
            ->getRepository('AppBundle:Article')
            ->getArticleList();

        return $this->render('AppBundle:Default:article-list.html.twig', array(
            'articles' => $articles
        ));
    }

    public function articleListInlineAction()
    {
        $articles = $this->getDoctrine()
            ->getRepository('AppBundle:Article')
            ->getArticleList();

        return $this->render('AppBundle:Default:article-list-inline.html.twig', array(
            'articles' => $articles
        ));
    }

    public function footer1Action()
    {
        $categories = $this->getDoctrine()
            ->getRepository('AppBundle:Category')
            ->findAll();

        return $this->render('AppBundle:Default:footer1.html.twig', array(
            'categories' => $categories
        ));
    }

    public function searchEngineAction()
    {
        $form = $this->get('form.factory')->create(new SearchType());

        return $this->render('AppBundle:Default:searchEngine.html.twig', array(
                    'form' => $form->createView(),
                ));
    }

    public function socialFooterAction()
    {
        $parameter = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1);

        return $this->render('AppBundle:Default:socialFooter.html.twig', array(
            'parameter' => $parameter
        ));
    }

    public function searchAction(Request $request)
    {
        $param = $request->request->get('appbundle_search');
        $q = $param['search'];

        $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getSearch($q);

        return $this->render('AppBundle:Article:search.html.twig', array(
            'articles' => $articles
        ));
    }

    public function alertOneAction()
    {
        $parameter = $this->getDoctrine()->getManager()->getRepository('AppBundle:Parameter')->findOneById(1);

        return $this->render('AppBundle:Default:alertOne.html.twig', array(
            'parameter' => $parameter
        ));
    }

    public function sliderPicturesAction()
    {
        $pictures = $this->getDoctrine()
            ->getRepository('AppBundle:Picture')
            ->getLastPosted(12);

        return $this->render('AppBundle:Default:sliderPictures.html.twig', array(
            'pictures' => $pictures
        ));
    }
}
