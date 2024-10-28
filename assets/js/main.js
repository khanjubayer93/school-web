(function ($) {
  ("use strict");

  $(".jk-banner-slider").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(".popular-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
})(jQuery);
