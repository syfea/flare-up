<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\ChoiceList;
use AppBundle\Entity\Category;
use FM\ElfinderBundle\Form\Type\ElFinderType;

class ArticleType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
        ->add('title', 'text')
        ->add('content', 'ckeditor', array(
            'transformers' => array(),
        ))
        ->add('smallContent', 'text')
        ->add('picture', 'file', array('data_class' => null, 'required' => false))
        ->add('category', 'entity', array(
            'class' => 'AppBundle:Category',
            'property' => 'name',
        ))
        ->add('save', 'submit');
  }

  public function setDefaultOptions(OptionsResolverInterface $resolver)
  {
    $resolver->setDefaults(array(
      'data_class' => 'AppBundle\Entity\Article'
    ));
  }

  public function getName()
  {
    return 'appbundle_article';
  }
}