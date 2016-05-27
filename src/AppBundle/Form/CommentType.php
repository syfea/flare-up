<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CommentType extends AbstractType
{
    public function __construct($options = null) {
        $this->options = $options;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $user = $this->options['user'];
        if (is_null($user)) {
            $username = '';
            $email = '';
        } else {
            $username = $user->getUsername();
            $email = $user->getEmail();
        }
        $builder
            ->add('message', 'textarea')
            ->add('username', 'text',array(
                    'data' => $username,
                ))
            ->add('email', 'email',array(
                    'data' => $email,
                ))
            ->add('captcha', 'genemu_recaptcha', array(
                    'mapped' => false,
                ))
            ->add('save', 'submit');
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
          'data_class' => 'AppBundle\Entity\Comment'
        ));
    }

    public function getName()
    {
        return 'appbundle_comment';
    }
}