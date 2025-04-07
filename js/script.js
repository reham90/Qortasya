$(window).on('load', function () {
  $(".preloader").hide();
});
$(document).ready(function() {
    new WOW().init();

    //////// search /////////////
    $(".search-btn").click(function(e) {
        e.preventDefault();
        $('.search-content').toggleClass('height-when-open');
        $('.search-btn').toggleClass('close-search');
    });
//////////////////////////////////////// password verefication  /////////////////////////////
$(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });
    //phone size menu onclick
    if ($(window).width() <= 991) {

        $(".menu-id").click(function(e) {
            e.preventDefault();

            $(".navgition").toggleClass("reset-left");

            $("body").toggleClass("overflow");
          

        });

        //slide down menu
        $(".menu-item-has-children").click(function(e) {
            e.preventDefault();
            $(this).find(".sub-menu ").slideToggle(400);
            $(".menu-item-has-children ").not(this).find(".sub-menu ").slideUp(400);
            if ($(window).width() <= 991) {

                $(this).toggleClass("active");
                $(".menu-item-has-children ").not(this).removeClass("active");

            }
        });
    }

 //fixed nav
 $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var $stickyNav = $(".top-header");
    var $stickyHeader = $("header");
    var windowWidth = $(window).width();
    // Handle fixed navigation
    $stickyNav.toggleClass("fixed-nav", scroll >= 200);
    // Handle fixed header
    if (lastScroll - scroll > 0 || (lastScroll - scroll >= 0 && windowWidth <= 991)) {
        $stickyHeader.addClass("fixed-header");
        $('.search-content').removeClass('height-when-close', 1000);
    }
  
    if (scroll === 0) {
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
        $('.search-content').addClass('height-when-close', 500);
        $('.search-content').removeClass('height-when-open', 500);
        $('.search-btn').removeClass('close-search');
    }
    if (lastScroll - scroll < 0){
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
    }
    lastScroll = scroll;
});

var lastScroll = 0;



    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });


    ///////// **test-section** /////////

    var test = new Swiper(".test-slider .swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".test-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".test-slider .swiper-btn-next",
            prevEl: ".test-slider .swiper-btn-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });




    ////////////** footer transfer into accordion **//////////

    if ($(window).width() <= 991) {
    $(".footer-accordion").click(function () {
      var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
      $(".footer-accordion").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("max-height") == "0px") {
        $(this).siblings().css("max-height", x);
        $(this).siblings(".nav-foot").css("padding-top", "15px");
      } else {
        $(this).siblings().css("max-height", "0");
        $(this).siblings(".nav-foot").css("padding-top", "0");
      }
  
    
    });
    };

    $('.delete-product').on('click', function(){
        $(this).closest(".table-record").remove();
      });

      //////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  /**** upload image user  */
  $("input:file").change(function (){
    var fileName = $(this).val();
    if(fileName.length >0){
$(this).parent().children('span').html(fileName);
    }
    else{
        $(this).parent().children('span').html("Choose file");

    }
});
//file input preview
function readURL(input) {
    if (input.files && input.files[0]) {
            var reader = new FileReader();            
            reader.onload = function (e) {
                    $('.logoContainer img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
    }
}
$("input:file").change(function(){
        readURL(this);
});
///////////////////////////////////
    

     $('.nav-tabs > li a[title]').tooltip();
    
     //Wizard
     $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
 
         var target = $(e.target);
     
         if (target.parent().hasClass('disabled')) {
             return false;
         }
     });
 
     $(".next-step").click(function (e) {
 
         var active = $('.wizard .nav-tabs li.active');
         active.next().removeClass('disabled');
         nextTab(active);
 
     });
     $(".prev-step").click(function (e) {
 
         var active = $('.wizard .nav-tabs li.active');
         prevTab(active);
 
     });
 });
 
 function nextTab(elem) {
     $(elem).next().find('a[data-toggle="tab"]').click();
 }
 function prevTab(elem) {
     $(elem).prev().find('a[data-toggle="tab"]').click();
 }
 
 
 $('.wizard .nav-tabs').click(function () {
     $('.wizard .nav-tabs li.active').removeClass('active');
     $(this).addClass('active');
});

 ////////////** counter  *///////////////////////////////
 var ax = 0;
 $(window).scroll(function() {
 
     var oTop = $('#counter').offset().top - window.innerHeight;
     // Md.Asaduzzaman Muhid
     if (ax == 0 && $(window).scrollTop() > oTop) {
         $('.counter-number').each(function() {
             var $this = $(this);
             jQuery({
                 Counter: 0
             }).animate({
                 Counter: $this.text()
             }, {
                 duration: 2000,
                 easing: 'swing',
                 step: function() {
                     $this.text(Math.ceil(this.Counter));
                 }
             });
         });
         ax = 1; // Md.Asaduzzaman Muhid
     }
 });