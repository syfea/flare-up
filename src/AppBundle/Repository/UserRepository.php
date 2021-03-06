<?php

namespace AppBundle\Repository;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class UserRepository extends \Doctrine\ORM\EntityRepository
{
    /**
     * Find all users with a specific role.
     */
    public function fetchByRoles($roles = [])
    {
        $allowedUsers = array();
        $query = $this->createQueryBuilder('u')
            ->getQuery()->getResult();

        foreach($query as $user) {
            foreach($user->getRoles() as $role) {
                if(in_array($role, $roles)){
                    $allowedUsers[] = $user;
                }
            }
        }

        return $allowedUsers;
    }
}