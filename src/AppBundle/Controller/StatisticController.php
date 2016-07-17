<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Article;
use Symfony\Component\HttpFoundation\RedirectResponse;


class StatisticController extends Controller
{
    public function categoriesAction()
    {
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $categories = $this->getDoctrine()
                ->getRepository('AppBundle:Category')
                ->getCategoriesByUser();
        } else {
            $user = $this->container->get('security.context')->getToken()->getUser();
            $categories = $this->getDoctrine()
                ->getRepository('AppBundle:Category')
                ->getCategoriesByUser($user);
        }


        return $this->render('AppBundle:Statistic:categories.html.twig', array(
            'categories' => $categories,
        ));
    }

    public function articlesRankingAction()
    {
        $user = $this->container->get('security.context')->getToken()->getUser();

        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getAllArticlesByUser();
        } else {
            $user = $this->container->get('security.context')->getToken()->getUser();
            $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getAllArticlesByUser($user);
        }


        $tab1 = array();
        $tab2 = array();
        foreach ($articles as $article) {
            $ga1 = $article->getAnalytics();
            $tab1[$article->getId()] = $ga1['pageViews'];
            $ga2 = $article->getAnalytics('-7 day');
            $tab2[$article->getId()] = $ga2['pageViews'];
        }
        arsort($tab1);
        arsort($tab2);

        $return = array();
        $itab1 = 1;
        foreach($tab1 as $key => $nbViews) {
            $itab2 = 1;
            foreach ($tab2 as $key2 => $nbViews2) {
                if ($key == $key2) {
                    break;
                }
                $itab2++;
            }

            if ($itab1 < $itab2) {
                $position = 'up';
            } elseif ($itab1 > $itab2) {
                $position = 'down';
            } else {
                $position = '';
            }
            $itab1++;
            $return[] = [
                            'article'  => $this->getDoctrine()->getRepository('AppBundle:Article')->findById($key),
                            'position' => $position,
                            'nbViews'  => $nbViews
                        ];
        }


        return $this->render('AppBundle:Statistic:articlesRanking.html.twig', array(
            'articles' => $return
        ));
    }

    public function viewDiagramAction()
    {
        $user = $this->container->get('security.context')->getToken()->getUser();
        $userArticles = $this->getDoctrine()
            ->getRepository('AppBundle:Article')
            ->getRecentArticleByUser($user, 3);

        return $this->render('AppBundle:Statistic:viewDiagram.html.twig', array(
            'articles' => $userArticles
        ));
    }

    public function articlesPercentAction()
    {
        $user = $this->container->get('security.context')->getToken()->getUser();
        if ($this->container->get('security.authorization_checker')->isGranted('ROLE_SUPER_ADMIN')) {
            $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getAllArticlesByUser();
        } else {
            $user = $this->container->get('security.context')->getToken()->getUser();
            $articles = $this->getDoctrine()
                ->getRepository('AppBundle:Article')
                ->getAllArticlesByUser($user);
        }

        return $this->render('AppBundle:Statistic:articlesPercent.html.twig', array(
            'articles' => $articles
        ));
    }
}
