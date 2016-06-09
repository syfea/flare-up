<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use FOS\UserBundle\Model\User as BaseUser;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class User
 * @package AppBundle\Entity
 * @ORM\Table(name="fos_user")
 * @ORM\Entity
 */
class User extends BaseUser
{
    const ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN';
    const ROLE_ADMIN = 'ROLE_ADMIN';
    const ROLE_USER = 'ROLE_USER';

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var
     *
     * @ORM\ManyToMany(targetEntity="Group", inversedBy="users")
     * @ORM\JoinTable(name="users_groups",
     *      inverseJoinColumns={@ORM\JoinColumn(name="group_id", referencedColumnName="id")}
     * )
     */
    protected $groups;

    /**
     * @ORM\OneToMany(targetEntity="Article", mappedBy="user", cascade={"remove", "persist"})
     */
    protected $articles;

    /**
     * @ORM\OneToMany(targetEntity="Contact", mappedBy="user", cascade={"remove", "persist"})
     */
    protected $contacts;

    /**
     * @var
     *
     * @ORM\Column(name="gender", type="string", length=255, nullable=true)
     */
    protected $gender;

    /**
     * @var
     *
     * @ORM\Column(name="firstname", type="string", length=255, nullable=true)
     */
    protected $firstname;

    /**
     * @var
     *
     * @ORM\Column(name="lastname", type="string", length=255, nullable=true)
     */
    protected $lastname;

    /**
     * @var
     *
     * @ORM\Column(name="address", type="text", nullable=true, nullable=true)
     */
    protected $address;

    /**
     * @var
     *
     * @ORM\Column(name="zip_code", type="string", length=255, nullable=true)
     */
    protected $zipCode;

    /**
     * @var
     *
     * @ORM\Column(name="city", type="string", length=255, nullable=true)
     */
    protected $city;

    /**
     * @var
     *
     * @ORM\Column(name="country", type="string", length=255, nullable=true)
     */
    protected $country;

    /**
     * @var
     *
     * @ORM\Column(name="phone", type="string", length=255, nullable=true)
     */
    protected $phone;

    /**
     * @var
     *
     * @ORM\Column(name="facebook", type="string", length=255, nullable=true)
     */
    protected $facebook;

    /**
     * @var
     *
     * @ORM\Column(name="twitter", type="string", length=255, nullable=true)
     */
    protected $twitter;

    /**
     * @var
     *
     * @ORM\Column(name="skype", type="string", length=255, nullable=true)
     */
    protected $skype;

    /**
     * @var
     *
     * @ORM\Column(name="instagram", type="string", length=255, nullable=true)
     */
    protected $instagram;

    /**
     * @var
     *
     * @ORM\Column(name="about_me", type="text", nullable=true)
     */
    protected $about_me;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @Assert\File
     */
    private $vignet;

    private $url;

    public function getBrochure()
    {
        return $this->brochure;
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
        $this->groups = new ArrayCollection();
        $this->url = $this->getUrl();
    }

    /**
     * @param mixed $gender
     */
    public function setGender($gender)
    {
        $this->gender = $gender;
    }

    /**
     * @return mixed
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * @param mixed $firstname
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }

    /**
     * @return mixed
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * @param mixed $lastname
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    /**
     * @return mixed
     */
    public function getLastname()
    {
        return $this->lastname;
    }



    /**
     * @param mixed $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /**
     * @return mixed
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param mixed $country
     */
    public function setCountry($country)
    {
        $this->country = $country;
    }

    /**
     * @return mixed
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $zipCode
     */
    public function setZipCode($zipCode)
    {
        $this->zipCode = $zipCode;
    }

    /**
     * @return mixed
     */
    public function getZipCode()
    {
        return $this->zipCode;
    }

    /**
     * @param mixed $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * @return mixed
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param $group
     * @return $this
     */
    public function addGoup($group)
    {
        $this->groups[] = $group;
        $group->setUser($this);

        return $this;
    }

    /**
     * @param $groups
     */
    public function setGroups($groups)
    {
        $this->groups->clear();
        foreach ($groups as $group) {
            $this->addGroup($group);
        }
    }

    /**
     * @return ArrayCollection
     */
    public function getGroups()
    {
        return $this->groups;
    }

    /**
     * @param mixed $facebook
     */
    public function setFacebook($facebook)
    {
        $this->facebook = $facebook;
    }

    /**
     * @return mixed
     */
    public function getFacebook()
    {
        return $this->facebook;
    }

    /**
     * @param mixed $twitter
     */
    public function setTwitter($twitter)
    {
        $this->twitter = $twitter;
    }

    /**
     * @return mixed
     */
    public function getTwitter()
    {
        return $this->twitter;
    }

    /**
     * @param mixed $skype
     */
    public function setSkype($skype)
    {
        $this->skype = $skype;
    }

    /**
     * @return mixed
     */
    public function getSkype()
    {
        return $this->skype;
    }

    /**
     * @param mixed $about_me
     */
    public function setAboutMe($about_me)
    {
        $this->about_me = $about_me;
    }

    /**
     * @return mixed
     */
    public function getAboutMe()
    {
        return $this->about_me;
    }

    public function getVignet()
    {
        return $this->vignet;
    }

    public function setVignet($vignet)
    {
        $this->vignet = $vignet;

        return $this;
    }

    /**
     * Add articles
     *
     * @param \AppBundle\Entity\Article $articles
     * @return User
     */
    public function addArticle(\AppBundle\Entity\Article $articles)
    {
        $this->articles[] = $articles;

        return $this;
    }

    /**
     * Remove articles
     *
     * @param \AppBundle\Entity\Article $articles
     */
    public function removeArticle(\AppBundle\Entity\Article $articles)
    {
        $this->articles->removeElement($articles);
    }

    /**
     * Get articles
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArticles()
    {
        return $this->articles;
    }

    /**
     * Set articles
     *
     * @param \Doctrine\Common\Collections\Collection $articles
     */
    public function setArticle(\Doctrine\Common\Collections\Collection $articles)
    {
        $this->articles = $articles;
    }

    /**
     * @return mixed
     */
    public function getRateComplete()
    {
        $nb = 0;
        if ($this->getFirstname() != '') { $nb++; }
        if ($this->getLastname() != '') { $nb++; }
        if ($this->getEmail() != '') { $nb++; }
        if ($this->getZipCode() != '') { $nb++; }
        if ($this->getAddress() != '') { $nb++; }
        if ($this->getCity() != '') { $nb++; }
        if ($this->getVignet() != '') { $nb++; }
        if ($this->getAboutMe() != '') { $nb++; }
        if ($this->getFacebook() != '') { $nb++; }
        if ($this->getUsername() != '') { $nb++; }
        if ($this->getTwitter() != '') { $nb++; }
        if ($this->getSkype() != '') { $nb++; }
        if ($this->getPhone() != '') { $nb++; }

        return ($nb/13)*100;
    }


    /**
     * Set instagram
     *
     * @param string $instagram
     *
     * @return User
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

    public function getUrl()
    {
        $CHARACTER_REPLACE_URL = array(    'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
                        'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
                        'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
                        'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
                        'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );

        if ($this->id != 0) {
            global $kernel;

            if ('AppCache' == get_class($kernel)) {
                $kernel = $kernel->getKernel();
            }

            $container = $kernel->getContainer()->get('router');

            $str = strtr($this->getUsername(), $CHARACTER_REPLACE_URL);
            $str = str_replace(' ', '-', $str);
            $str = preg_replace('/[^A-Za-z0-9\-]/', '', $str);
            $str = strtolower($str);

            return $container->generate('app_user_fo_display', array('id' => $this->id, 'name' => $str));
        }
    }
}
