(function ($) {
  ("use strict");

  $(".jk-banner-wrap").slick({
    dots: false,
    infinite: true,
    speed: 700,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  });

  $(".popular-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
})(jQuery);
