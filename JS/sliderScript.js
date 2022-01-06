$(document).ready(function () {
  // slick slider js
  $(".js-products-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#arrowsAppend"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
  });
  $(".js-awards-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#awardsArrowsAppend"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  });
  $(".js-testimonials-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#testimonialsArrowsAppend"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  });
  $(".js-benefits-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#arrowsAppendBenefitsAndRewards"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  });
  $(".js-latest-offers-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#arrowsAppendLatestOffers"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  });
  $(".js-slider-distinct").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#arrowsAppendDistinct"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "32px",
        },
      },
    ],
  });

  $(".js-slider-top-features").slick({
    dots: true,
    arrows: true,
    infinite: true,
    appendArrows: $("#arrowsAppendTopFeatures"),
    centerMode: true,
    variableWidth: true,
    lazyLoad: "ondemand",
  });

  // $('.slick-track').addClass('start-slider');
  // $('.slick-track').on('click', function (){
  //   $(this).removeClass('start-slider');
  // });
  // let slickTrack = document.querySelectorAll('.slick-track');
  // $('.slick-arrow').on('click', function(){
  //   for(let i = 0; i < slickTrack.length; i++) {
  //     slickTrack[i].classList.remove('start-slider');
  //   }
  // });
  // slick slider js
});
