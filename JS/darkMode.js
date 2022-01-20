$(document).ready(function () {
  $("#darkSwitch").on("click", function () {
    $("#darkSwitch").toggleClass("checked");
    if ($("#darkSwitch").hasClass("checked")) {
      $('.light-icon').removeClass('d-none');
      $('.dark-icon').addClass('d-none');
      $(".addLightBG").addClass("lightback-ground");
      $(".btn-white").addClass("btn-white-dark-styles");
      $(".btndark-transparent-bg").addClass(
        "btndark-transparent-bg-dark-styles"
      );
      $('.form-control').addClass('form-dark');
      $('.label').addClass('form-dark');
      $(".products-header-title").addClass("products-header-title-dark-styles");
      $(".whiteFontDark").addClass("white-font");
      $(".greyFontDark").addClass("grey-font");
      $(".whiteFontDarkSymbol, .arrowsDark").addClass("white-font");
      $(".dropdown-menu, .dropdown-menu.secondary-nav-inner-dropdowns, .card , .arrow, .accordion-item, .blurb, .distinct-slider-container, .mobile-menu, .top-features-box, .form-styles").addClass("dark-style-bg");
      $('.darkModeBG').addClass('dark-styles');
      $('.btn-blue').addClass("darkFont");
    } else {
      $('.form-control').removeClass('form-dark');
      $('.label').removeClass('form-dark');
      $('.light-icon').addClass('d-none');
      $('.dark-icon').removeClass('d-none');
      $(".addLightBG").removeClass("lightback-ground");
      $(".btn-white").removeClass("btn-white-dark-styles");
      $(".btndark-transparent-bg").removeClass(
        "btndark-transparent-bg-dark-styles"
      );
      $(".products-header-title").removeClass(
        "products-header-title-dark-styles"
      );
      $(".whiteFontDark").removeClass("white-font");
      $(".greyFontDark").removeClass("grey-font");
      $(".whiteFontDarkSymbol, .arrowsDark").removeClass("white-font");
      $(".dropdown-menu, .dropdown-menu.secondary-nav-inner-dropdowns, .card , .arrow, .accordion-item, .blurb, .distinct-slider-container, .mobile-menu, .top-features-box, .form-styles").removeClass("dark-style-bg");
      $('.darkModeBG').removeClass('dark-styles');
      $('.btn-blue').removeClass("darkFont");
    }
  });
});
