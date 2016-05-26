<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class SearchType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
        ->add('search', 'text', array(
                                'label'  => '',
                                'attr'   =>  array(
                                                'class'   => 'searchbox-input',
                                                'placeholder' => 'Type and Press Enter'
                                    )
                                ))
        ->add('save', 'submit', array(
            'label'  => '',
            'attr'   =>  array(
                            'class'   => 'Type and Press Enter',
                            'placeholder' => ''
                )
            ));
  }

  public function getName()
  {
    return 'appbundle_search';
  }
}