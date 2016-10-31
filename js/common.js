

$(document).ready(function(){

    // $('.az-select').each(function(){
    //     var select = $(this);    
    //     var option = select.find('select option');
    //     var str = '<div class="az-options">';
    //     select.find('option').each(function(){
    //         str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
    //     });
    //     str+= '</div>';
    //     select.html(select.html() + str);

    //     select.find('select').mousedown(function(){
    //         return false;
    //     });
    //     select.mouseup(function(){
    //         select.find('select').focus();
    //     });
    //     select.find('.az-options div[data-val]').click(function(){
    //         select.find('select').val($(this).attr('data-val'));
    //     });
    //     select.find('select').focusout(function(){
    //         if(!select.is(':hover')){
    //             select.find('.az-options').slideUp(0);
    //             select.removeClass('az-select-focus');
    //         }
    //     });
    // });

    // $(".az-select").click(function(){
    //     $(this).find('.az-options').slideToggle(0);
    //     $(this).toggleClass('az-select-focus');
    // });


    //====slidemenu===category.php=======

// $('.zk-category').setTimeout(function(){
//     $('.zk-show-menu', this).hover(); 
// }, 500);

// $('.zk-category').hover( function(){  
//     $('.zk-show-menu', this).slideToggle(450);        
// });

// $('.zk-category').hover(function(){
//   var nav = $('.zk-show-menu', this);
//   setTimeout( function(){      
//       nav.slideToggle(450);
//      }, 1000);   
// });


$('.zk-button-comments').css("display", "none");

$('#tab_l1').on('click', function(){
  $('.zk-button-comments').hide();
   $('.zk-desc').show();
});

$('#tab_l2').on('click', function(){
  $('.zk-button-comments').css("display", "block").show();
   $('.zk-desc').hide();
});




  var owl = $("#owl-demo");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="prev-ars1"></span>','<span class="next-ars1"></span>'],
    responsive:{
        0:{
          items:1
        },
        380:{
          items:2
        },
        600:{
          items:3
        },
        1000:{
          items:5
        },
         1200:{
          items:6
        }
    }
     
  });

 
  var owl = $("#owl-demo2");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="prev-ars1"></span>','<span class="next-ars1"></span>'],
    responsive:{
        0:{
          items:1
        },
        380:{
          items:2
        },
        600:{
          items:3
        },
        1000:{
          items:3
        },
         1200:{
          items:3
        }
    }
     
  });
 
  
  var owl = $("#owl-demo3");
 
  owl.owlCarousel({

    loop:true,//Зацикливаем слайдер
    nav:true, //Навигация включена
    autoplay:false,//автозапуск
    smartSpeed:1000,//Время движения
    margin:0,
    navText:['<span class="prev-ars1"></span>','<span class="next-ars1"></span>'],
    responsive:{
        0:{
          items:1
        },
        380:{
          items:2
        },
        600:{
          items:3
        },
        1000:{
          items:3
        },
         1200:{
          items:3
        }
    } 
 
 });

 }); 


