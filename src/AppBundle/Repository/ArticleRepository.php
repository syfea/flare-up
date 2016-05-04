<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * ArticleRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ArticleRepository extends EntityRepository
{
    public function getLastPosted($limit = 3)
    {
        return $this->createQueryBuilder('a')
            ->where('a.publishedAt <= :publishedAt')
            ->setParameter('publishedAt', date('Y-m-d'))
            ->addOrderBy('a.publishedAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()->getResult();
    }

    public function getTopStories($limit = 3)
    {
        return $this->createQueryBuilder('a')
            ->where('a.publishedAt <= :publishedAt')
            ->setParameter('publishedAt', date('Y-m-d'))
            ->addOrderBy('a.countView', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()->getResult();
    }

    public function getArticleList($limit = 8)
    {
        return $this->createQueryBuilder('a')
            ->where('a.publishedAt <= :publishedAt')
            ->setParameter('publishedAt', date('Y-m-d'))
            ->addOrderBy('a.publishedAt', 'DESC')
            ->setFirstResult(3)
            ->setMaxResults($limit)
            ->getQuery()->getResult();
    }
}
