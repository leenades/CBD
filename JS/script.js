// AOS.init();
if (localStorage.getItem("cookieSeen") != "shown") {
  $(".cookie-banner").removeClass("d-none");
}
$("#acceptAllCookies").on("click", function (e) {
  e.preventDefault();
  localStorage.setItem("cookieSeen", "shown");
  $(".cookie-banner").fadeOut();
});
$("#confirmPreferences").on("click", function (e) {
  e.preventDefault();
  localStorage.setItem("cookieSeen", "shown");
  $(".cookie-banner").fadeOut();
  if ($(".manage-cookies").hasClass("manage-cookies-btn-clicked")) {
    $(".manage-cookies").removeClass("manage-cookies-btn-clicked");
  }
});
$(".close").click(function () {
  $(".cookie-banner").fadeOut();
});
$("#manageCookies").on("click", function (e) {
  e.preventDefault();
  $(".manage-cookies").addClass("manage-cookies-btn-clicked");
});
$(".close-pref").on("click", function (e) {
  $(".manage-cookies").removeClass("manage-cookies-btn-clicked");
});

// phone number sign up
var input = document.querySelector("#phone"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg"),
  btnContinue = $("#signUpContinueBtn");

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];
// country phone number input initialization
var iti = window.intlTelInput(input, {
  initialCountry: "ae",
  preferredCountries: ["ae"],
  separateDialCode: true,
  utilsScript: "../Plugins/intlTelInput/build/js/utils.js?1613236686837",
});
var reset = function () {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("d-none");
};
// on blur: validate
input.addEventListener("blur", function () {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("d-none");
      btnContinue.removeAttr("disabled");
      btnContinue.addClass("btn-blue");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
      btnContinue.attr("disabled");
      btnContinue.removeClass("btn-blue");
    }
  }
});
// on keyup / change flag: reset
input.addEventListener("change", reset);
input.addEventListener("keyup", reset);
// phone number sign up

$(document).ready(function () {
  $(".cookie-banner").delay(2000).fadeIn();

  $("#item-5677").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5677 .secondary-nav-inner-dropdowns").addClass("show");
    $(".arrow").css({
      transform: "translate(50px, 32px) rotate(45deg)",
      transition: "all .5s ease-in-out",
      display: "block",
    });
    if ($("#item-5678, #item-5679").hasClass("hover")) {
      $("#item-5678, #item-5679").removeClass("hover");
      $(
        "#item-5678 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns"
      ).removeClass("show");
    }
  });
  $("#item-5678").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5678 .secondary-nav-inner-dropdowns").addClass("show");
    $(".arrow").css({
      transform: "translate(200px, 32px) rotate(45deg)",
      transition: "all .5s ease-in-out",
      display: "block",
    });
    if ($("#item-5677, #item-5679").hasClass("hover")) {
      $("#item-5677, #item-5679").removeClass("hover");
      $(
        "#item-5677 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns"
      ).removeClass("show");
    }
  });
  $("#item-5679").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5679 .secondary-nav-inner-dropdowns").addClass("show");
    $(".arrow").css({
      transform: "translate(345px, 32px) rotate(45deg)",
      transition: "all .5s ease-in-out",
      display: "block",
    });
    if ($("#item-5678, #item-5677").hasClass("hover")) {
      $("#item-5678, #item-5677").removeClass("hover");
      $(
        "#item-5678 .secondary-nav-inner-dropdowns, #item-5677 .secondary-nav-inner-dropdowns"
      ).removeClass("show");
    }
  });
  $("#item-5677, #item-5678, #item-5679").on("mouseleave", function () {
    $(".arrow").css({
      display: "none",
    });
    $(
      "#item-5678 .secondary-nav-inner-dropdowns, #item-5677 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns"
    ).removeClass("show");
  });

  // if ($("#darkSwitch").hasClass("checked")) {
  //   $("#darkSwitch").removeClass("checked");
  // }
  $("#darkSwitch").on("click", function () {
    $("#darkSwitch").toggleClass("checked");
    if ($("#darkSwitch").hasClass("checked")) {
      $(".addLightBG").addClass("lightback-ground");
    } else {
      $(".addLightBG").removeClass("lightback-ground");
    }
  });
  $(".dropdown-inner-menu-item").click(function (e) {
    e.preventDefault();
    $(".dropdown-inner-menu-item").removeClass("current-item");
    $(this).addClass("current-item");
  });
  $("body").on("scroll resize", function () {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var windowBottomPos = windowTop + windowHeight;

    var mainHeader = $("#mainHeader").offset().top + $("#mainHeader").height();
    var x = $("#navBarPrimary").position().top;
    const navBarPrimaryHeight =
      document.getElementById("navBarPrimary").offsetHeight;

    if (windowBottomPos > mainHeader + 300) {
      $("#navBarPrimary").addClass("fixed-nav");
    } else {
      $("#navBarPrimary").removeClass("fixed-nav");
    }
    if (-x > navBarPrimaryHeight) {
      $(".navbar-secondary").addClass("fixed-nav-secondary");
    } else {
      $(".navbar-secondary").removeClass("fixed-nav-secondary");
    }
    if ($(".navbar-secondary").hasClass("fixed-nav-secondary")) {
      $(".cbd-dark-logo").removeClass("d-none");
      $(".cbd-light-logo").addClass("d-none");
    } else {
      $(".cbd-dark-logo").addClass("d-none");
      $(".cbd-light-logo").removeClass("d-none");
    }
  });

  // COUNTER FUNCTION START
  // on change value of counter one two three and four
  $("#counter-1, #counter-2, #counter-3, #counter-4").on(
    "change",
    totalAmountChange
  );
  function totalAmountChange() {
    var counterOne = $("#counter-1").val();
    var counterTwo = $("#counter-2").val();
    var counterThree = $("#counter-3").val();
    var counterFour = $("#counter-4").val();

    var updatedTotalAmount =
      (+counterOne + +counterTwo + +counterThree + +counterFour) / 4;
    $("#totalAmount").attr("data-value", updatedTotalAmount);
    $("#totalAmount").html(updatedTotalAmount);
  }
  $(".counter-btn").on("click", function (e) {
    e.preventDefault();
    var button = $(this);
    var counterValue = $("#counter-" + button.data("index")).val(); //1000.00
    var counterIncVal = button.data("inc"); //10 or -10

    $("#counter-" + button.data("index")).val(+counterValue + +counterIncVal);
    totalAmountChange();
  });
  // COUNTER FUNCTION END

  // slick slider js
  $(".js-products-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#arrowsAppend"),
    variableWidth: true,
    lazyLoad: "ondemand",
  });
  $(".js-awards-slider-styles").slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#awardsArrowsAppend"),
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
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#testimonialsArrowsAppend"),
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
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#arrowsAppendDistinct"),
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
  // slick slider js
});
