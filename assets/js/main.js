
jQuery(document).ready(function ($) {
    windowHeight = jQuery(window).innerHeight();
    HeaderHeight=jQuery("header").innerHeight();
  
    jQuery('.MainImage').css('height', (windowHeight-HeaderHeight)+'px');

    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
    
        if (scroll >= 100) {
          jQuery("body").addClass("StickHeader");
        } else {
          jQuery("body").removeClass("StickHeader");
        }
    });

    if (jQuery(window).width() < 1000) {
        jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
        })
        .fadeIn(400);
    }
    else {
      jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
        })
        .fadeIn(400);
    }

    jQuery(".OverLay , .openpopup , .Contactusnow").click(function () {
      jQuery("body").toggleClass("activeform");
      jQuery("body").removeClass("pop3active");
    });
   
    jQuery(".CloseClick, .MenuClick , .menudrop ,.MenuActive1").click(function () {
      jQuery("body").toggleClass("ActivePanel");
    });
    jQuery(".getaQuote , .CloseContact ,.Txt3").click(function () {
        jQuery("body").toggleClass("contactusActive");
    });
    jQuery(".heroBanner").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnHover:false
    });

    $('[data-fancybox="portfolio1"]').fancybox({
      thumbs : {
          autoStart : true,
          axis      : 'x'
        }
    });

    jQuery(".Drop1 , .Txt13").click(function () {
      jQuery(".ValueItem").removeClass("activeAccord");
      jQuery(this).closest(".ValueItem").addClass("activeAccord");
    });
    jQuery(".AccordionQstion").click(function () {
      jQuery(this).parent().toggleClass("active")
    });
    
});