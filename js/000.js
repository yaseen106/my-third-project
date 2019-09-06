$( function (){

    'use strict';
    //Adjust Slider Height
/*
    var winH   =  $(window).height();
    var upperH =  $('.upper-bar').innerHeight();
    var navH   =  $('.navbar').innerHeight();
$('.slider').height( winH - ( upperH + navH ));

*/

            //featured work shuffle
            $('.festures-work ul li').on ( 'click', function (){

                $(this).addClass('active').siblings().removeClass('active');
                
                if ($(this).data('class') === 'all'){
                    $('.shuffle-imgs .col-md ').css('opacity' , 1 );
                 } else { 
                        $('.shuffle-imgs .col-md ').css('opacity' , '.07');
                        $($(this).data('class')).parent().css('opacity', 1);
                    };
                
            });
    });
   
