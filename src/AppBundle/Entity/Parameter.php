<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Parameter
 *
 * @ORM\Table(name="parameter")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ParameterRepository")
 */
class Parameter
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="facebook", type="string", length=255, nullable=true)
     */
    private $facebook;

    /**
     * @var string
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    private $twitter;

    /**
     * @var string
     *
     * @ORM\Column(name="pinterest", type="string", length=255, nullable=true)
     */
    private $pinterest;

    /**
     * @var string
     *
     * @ORM\Column(name="instagram", type="string", length=255, nullable=true)
     */
    private $instagram;

    /**
     * @var string
     *
     * @ORM\Column(name="youtube", type="string", length=255, nullable=true)
     */
    private $youtube;

    /**
     * @var string
     *
     * @ORM\Column(name="vimeo", type="string", length=255, nullable=true)
     */
    private $vimeo;

    /**
     * @var string
     *
     * @ORM\Column(name="linkedin", type="string", length=255, nullable=true)
     */
    private $linkedin;

    /**
     * @var string
     *
     * @ORM\Column(name="googlePlus", type="string", length=255, nullable=true)
     */
    private $googlePlus;

    /**
     * @var string
     *
     * @ORM\Column(name="rss", type="string", length=255, nullable=true)
     */
    private $rss;

    /**
     * @var string
     *
     * @ORM\Column(name="content_contact", type="text", nullable=true)
     */
    private $contentContact;

    /**
     * @var string
     *
     * @ORM\Column(name="privacy", type="text", nullable=true)
     */
    private $privacy;

    /**
     * @var string
     *
     * @ORM\Column(name="alert_one", type="text", nullable=true)
     */
    private $alert_one;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set facebook
     *
     * @param string $facebook
     *
     * @return Parameter
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;

        return $this;
    }

    /**
     * Get facebook
     *
     * @return string
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * Set twitter
     *
     * @param string $twitter
     *
     * @return Parameter
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * Get twitter
     *
     * @return string
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * Set pinterest
     *
     * @param string $pinterest
     *
     * @return Parameter
     */
    public function setPinterest($pinterest)
    {
        $this->pinterest = $pinterest;

        return $this;
    }

    /**
     * Get pinterest
     *
     * @return string
     */
    public function getPinterest()
    {
        return $this->pinterest;
    }

    /**
     * Set instagram
     *
     * @param string $instagram
     *
     * @return Parameter
     */
    public function setInstagram($instagram)
    {
        $this->instagram = $instagram;

        return $this;
    }

    /**
     * Get instagram
     *
     * @return string
     */
    public function getInstagram()
    {
        return $this->instagram;
    }

    /**
     * Set youtube
     *
     * @param string $youtube
     *
     * @return Parameter
     */
    public function setYoutube($youtube)
    {
        $this->youtube = $youtube;

        return $this;
    }

    /**
     * Get youtube
     *
     * @return string
     */
    public function getYoutube()
    {
        return $this->youtube;
    }

    /**
     * Set vimeo
     *
     * @param string $vimeo
     *
     * @return Parameter
     */
    public function setVimeo($vimeo)
    {
        $this->vimeo = $vimeo;

        return $this;
    }

    /**
     * Get vimeo
     *
     * @return string
     */
    public function getVimeo()
    {
        return $this->vimeo;
    }

    /**
     * Set linkedin
     *
     * @param string $linkedin
     *
     * @return Parameter
     */
    public function setLinkedin($linkedin)
    {
        $this->linkedin = $linkedin;

        return $this;
    }

    /**
     * Get linkedin
     *
     * @return string
     */
    public function getLinkedin()
    {
        return $this->linkedin;
    }

    /**
     * Set googlePlus
     *
     * @param string $googlePlus
     *
     * @return Parameter
     */
    public function setGooglePlus($googlePlus)
    {
        $this->googlePlus = $googlePlus;

        return $this;
    }

    /**
     * Get googlePlus
     *
     * @return string
     */
    public function getGooglePlus()
    {
        return $this->googlePlus;
    }

    /**
     * Set rss
     *
     * @param string $rss
     *
     * @return Parameter
     */
    public function setRss($rss)
    {
        $this->rss = $rss;

        return $this;
    }

    /**
     * Get rss
     *
     * @return string
     */
    public function getRss()
    {
        return $this->rss;
    }

    /**
     * Set contentContact
     *
     * @param string $contentContact
     *
     * @return Parameter
     */
    public function setContentContact($contentContact)
    {
        $this->contentContact = $contentContact;

        return $this;
    }

    /**
     * Get contentContact
     *
     * @return string
     */
    public function getContentContact()
    {
        return $this->contentContact;
    }

    /**
     * Set privacy
     *
     * @param string $privacy
     *
     * @return Parameter
     */
    public function setPrivacy($privacy)
    {
        $this->privacy = $privacy;

        return $this;
    }

    /**
     * Get privacy
     *
     * @return string
     */
    public function getPrivacy()
    {
        return $this->privacy;
    }

    /**
     * Set alertOne
     *
     * @param string $alertOne
     *
     * @return Parameter
     */
    public function setAlertOne($alertOne)
    {
        $this->alert_one = $alertOne;

        return $this;
    }

    /**
     * Get alertOne
     *
     * @return string
     */
    public function getAlertOne()
    {
        return $this->alert_one;
    }
}
