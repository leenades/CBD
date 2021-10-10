// AOS.init();
var input = document.querySelector("#phone"),
  errorMsg = document.querySelector("#error-msg"),
  validMsg = document.querySelector("#valid-msg"),
  btnContinue = $('#signUpContinueBtn');

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
  utilsScript: "../Plugins/intlTelInput/build/js/utils.js?1613236686837"
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
      btnContinue.removeAttr('disabled');
      btnContinue.addClass('btn-blue');
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
      btnContinue.attr('disabled');
      btnContinue.removeClass('btn-blue');
    }
  }
});

// on keyup / change flag: reset
input.addEventListener("change", reset);
input.addEventListener("keyup", reset);

$(document).ready(function () {
  if ($("#darkSwitch").hasClass("checked")) {
    $("#darkSwitch").removeClass("checked");
  }
  $(".js-products-slider-styles").slick({
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: $("#arrowsAppend"),
    variableWidth: true,
    lazyLoad: 'ondemand',
  });
  $(".js-benefits-slider-styles").slick({
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#benefitsArrowsAppend"),
    variableWidth: true,
    lazyLoad: 'ondemand',
  });
  $(".js-latest-offers-slider-styles").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#latestOffersArrowsAppend"),
    variableWidth: true,
    lazyLoad: 'ondemand',
  });
  $(".js-awards-slider-styles").slick({
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#awardsArrowsAppend"),
    variableWidth: true,
    lazyLoad: 'ondemand',
  });
  $(".js-branches-slider-styles").slick({
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#branchATMArrowsAppend"),
    variableWidth: true,
    lazyLoad: 'ondemand',
  });
  $(".js-testimonials-slider-styles").slick({
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $("#testimonialsArrowsAppend"),
    variableWidth: true,
    lazyLoad: 'ondemand',
  });
  $("#darkSwitch").on("click", function () {
    $("#darkSwitch").toggleClass("checked");
  });
});
