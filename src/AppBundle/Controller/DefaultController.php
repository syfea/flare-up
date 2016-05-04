<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('AppBundle:Default:index.html.twig');
    }

    /**
     * @Route("/admin")
     */
    public function adminAction()
    {
        return new Response('<html><body>Admin page!</body></html>');
    }

    public function navbarAction()
    {
        $categories = $this->getDoctrine()
            ->getRepository('AppBundle:Category')
            ->findAll();
        
        return $this->render('AppBundle:Default:navbar.html.twig', array(
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

}
