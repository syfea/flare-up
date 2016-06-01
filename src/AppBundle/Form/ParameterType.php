<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\FormBuilderInterface;

class ParameterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('content_contact', 'ckeditor', array(
                'transformers' => array(),
                'required' => true
            ))
            ->add('privacy', 'ckeditor', array(
                'transformers' => array(),
                'required' => true
            ))
            ->add('facebook', 'text', array('required' => false))
            ->add('twitter', 'text', array('required' => false))
            ->add('pinterest', 'text', array('required' => false))
            ->add('instagram', 'text', array('required' => false))
            ->add('youtube', 'text', array('required' => false))
            ->add('vimeo', 'text', array('required' => false))
            ->add('linkedin', 'text', array('required' => false))
            ->add('googleplus', 'text', array('required' => false))
            ->add('rss', 'text', array('required' => false))
            ->add('save', 'submit');
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Parameter'
        ));
    }

    public function getName()
    {
        return 'appbundle_parameter';
    }
}