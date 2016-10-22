<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * PictureRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PictureRepository extends EntityRepository
{
    public function getLastPosted($limit = 12)
    {
        return $this->createQueryBuilder('p')
            ->where('p.publishedAt <= :publishedAt')
            ->setParameter('publishedAt', date('Y-m-d H:i:s'))
            ->addOrderBy('p.publishedAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()->getResult();
    }
}