$(document).ready(function() {
    'use strict';
    //Sidebar Navigation
    $('.button-collapse').sideNav({
        menuWidth: 300,
    });


    //Drop Down
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
    });


    //Header Search Box
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.on('click',function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });


    //Dropdown
    $('select').material_select();


    //News Main Slider
    $('.pgwSlider').pgwSlider();


    //Header Fix
//    $(window).scroll(function(){
//        if ($(window).scrollTop()>100){
//            $('header').addClass('header-fix');
//            $('.wrapper').addClass('margin-top');
//        }else{
//            $('header').removeClass('header-fix');
//            $('.wrapper').removeClass('margin-top');
//        }
//    });

    //Tab Slider
    $('#main-slider').liquidSlider();

    // newsletter font
    $('#form-subscriber').on('submit', function(event) {
        var $this = $(this);
        var data = 'email=' + $('#appbundle_subscriber_email').val();
        $.ajax({
            url: $this.attr('action'),
            type: $this.attr('method'),
            data: data,
            success: function(data) {
                $('html, body').animate({ scrollTop: 0 }, 0);
                location.reload();
            },
            error: function () {
                alert('La requête n\'a pas abouti');
            }
        });


        return false;
    });

    $('#write-comment').click(function(){
        $('html,body').animate({
            scrollTop: $('#contactForm').offset().top
        }, 1000);
    });

    $('#contactForm').on('submit', function(event) {
        var $this = $(this);
        var data = 'email=' + $('#appbundle_comment_email').val() + '&username=' + $('#appbundle_comment_username').val() + '&message=' + $('#appbundle_comment_message').val() + '&article_id=' + $('#article_id').val();
        $.ajax({
            url: $this.attr('action'),
            type: $this.attr('method'),
            data: data,
            success: function(data) {
                $('#appbundle_comment_message').val('');
                $('html,body').animate({
                    scrollTop: $('.comment').offset().top - 100
                }, 1000);
                location.reload();
                $('#appbundle_comment_message').val('');
            },
            error: function () {
                alert('La requête n\'a pas abouti');
            }
        });


        return false;
    });
    
    $('#camera_wrap_1').camera({
        height: '520px',
        loader: 'bar',
        pagination: false,
        thumbnails: true
    });

});
