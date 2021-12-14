$(document).ready(function () {
  $("#darkSwitch").on("click", function () {
    $("#darkSwitch").toggleClass("checked");
    if ($("#darkSwitch").hasClass("checked")) {
      $(".addLightBG").addClass("lightback-ground");
      $(".btn-white").addClass("btn-white-dark-styles");
      $(".btndark-transparent-bg").addClass(
        "btndark-transparent-bg-dark-styles"
      );
      $(".products-header-title").addClass("products-header-title-dark-styles");
      $(".whiteFontDark").addClass("white-font");
      $(".whiteFontDarkSymbol, .arrowsDark").addClass("white-font");
      $(".dropdown-menu, .dropdown-menu.secondary-nav-inner-dropdowns, .card , .arrow, .accordion-item, .blurb, .distinct-slider-container").addClass("dark-style-bg");
      $('.darkModeBG').addClass('dark-styles');
      $('.btn-blue').addClass("darkFont");
    } else {
      $(".addLightBG").removeClass("lightback-ground");
      $(".btn-white").removeClass("btn-white-dark-styles");
      $(".btndark-transparent-bg").removeClass(
        "btndark-transparent-bg-dark-styles"
      );
      $(".products-header-title").removeClass(
        "products-header-title-dark-styles"
      );
      $(".whiteFontDark").removeClass("white-font");
      $(".whiteFontDarkSymbol, .arrowsDark").removeClass("white-font");
      $(".dropdown-menu, .dropdown-menu.secondary-nav-inner-dropdowns, .card , .arrow, .accordion-item, .blurb, .distinct-slider-container").removeClass("dark-style-bg");
      $('.darkModeBG').removeClass('dark-styles');
      $('.btn-blue').removeClass("darkFont");

    }
  });
});
