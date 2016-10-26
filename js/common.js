

$(document).ready(function(){

    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });


    //====slidemenu===category.php=======


<<<<<<< HEAD
    // $('.item').hover(function(){
    //      $('.zk-show-menu', this).slideDown(500);
    $('.zk-category').hover(function(){
        $('.zk-show-menu', this).slideDown(450);
=======
    $('.zk-category').hover(function(){
        $('.zk-show-menu', this).slideDown(500);    

    $('.zk-category').hover(function(){
        $('.zk-show-menu', this).slideDown(450);    

>>>>>>> 7393d275559ac39150e787502483f64e77fe6b8f
    },function(){
        $('.zk-show-menu', this).slideUp(400);             
    });
 //});





$(document).ready(function() {
 
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
      // items : 6, //10 items above 1000px browser width
      // itemsDesktop : [1000,5], //5 items between 1000px and 901px
      // itemsDesktopSmall : [900,3], // betweem 900px and 601px
      // itemsTablet: [250,2], //2 items between 600 and 0
      // // itemsMobile : true // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  //  $(".next").click(function(){
  //   owl.trigger('owl.next');
  // })
  //  $(".prev").click(function(){
  //   owl.trigger('owl.prev');
  // })
  // $(".play").click(function(){
  //   owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  // })
  // $(".stop").click(function(){
  //   owl.trigger('owl.stop');
  // })
 
});

$(document).ready(function() {
 
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
      // items : 6, //10 items above 1000px browser width
      // itemsDesktop : [1000,5], //5 items between 1000px and 901px
      // itemsDesktopSmall : [900,3], // betweem 900px and 601px
      // itemsTablet: [250,2], //2 items between 600 and 0
      // // itemsMobile : true // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  //  $(".next").click(function(){
  //   owl.trigger('owl.next');
  // })
  //  $(".prev").click(function(){
  //   owl.trigger('owl.prev');
  // })
  // $(".play").click(function(){
  //   owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  // })
  // $(".stop").click(function(){
  //   owl.trigger('owl.stop');
  // })
 
});

$(document).ready(function() {
 
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
      // items : 6, //10 items above 1000px browser width
      // itemsDesktop : [1000,5], //5 items between 1000px and 901px
      // itemsDesktopSmall : [900,3], // betweem 900px and 601px
      // itemsTablet: [250,2], //2 items between 600 and 0
      // // itemsMobile : true // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  //  $(".next").click(function(){
  //   owl.trigger('owl.next');
  // })
  //  $(".prev").click(function(){
  //   owl.trigger('owl.prev');
  // })
  // $(".play").click(function(){
  //   owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  // })
  // $(".stop").click(function(){
  //   owl.trigger('owl.stop');
  // })
 
});