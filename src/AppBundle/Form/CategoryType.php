<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\ChoiceList;

class CategoryType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
        ->add('name', 'text')
        ->add('description', 'textarea')
        ->add('position', 'choice', array(
            'multiple' => false,
            'expanded' => false,
            'choices' => array('' => '', 10 => '10', 20 => '20', 30 => '30', 40 => '40', 50 => '50', 60 => '60', 70 => '70', 80 => '80'),
        ))
        ->add('color', 'genemu_jquerycolor')
        ->add('save', 'submit');
  }

  public function setDefaultOptions(OptionsResolverInterface $resolver)
  {
    $resolver->setDefaults(array(
      'data_class' => 'AppBundle\Entity\Category'
    ));
  }

  public function getName()
  {
    return 'appbundle_category';
  }
}