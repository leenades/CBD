// AOS.init();


$(document).ready(function () {

  $("#item-5677").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5677 .secondary-nav-inner-dropdowns").addClass("show");
    if ($("#item-5678, #item-5679").hasClass("hover")) {
      $("#item-5678, #item-5679").removeClass("hover");
      $("#item-5678 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns").removeClass("show");
    }
  });
  $("#item-5678").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5678 .secondary-nav-inner-dropdowns").addClass("show");
    if ($("#item-5677, #item-5679").hasClass("hover")) {
      $("#item-5677, #item-5679").removeClass("hover");
      $("#item-5677 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns").removeClass("show");
    }
  });
  $("#item-5679").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5679 .secondary-nav-inner-dropdowns").addClass("show");
    if ($("#item-5678, #item-5677").hasClass("hover")) {
      $("#item-5678, #item-5677").removeClass("hover");
      $("#item-5678 .secondary-nav-inner-dropdowns, #item-5677 .secondary-nav-inner-dropdowns").removeClass("show");
    }
  });
  $("#item-5677, #item-5678, #item-5679").on("mouseleave", function () {
    $("#item-5678 .secondary-nav-inner-dropdowns, #item-5677 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns").removeClass("show");
  });

// navbar current button styles start
  $(".dropdown-inner-menu-item").click(function (e) {
    e.preventDefault();
    $(".dropdown-inner-menu-item").removeClass("current-item");
    $(this).addClass("current-item");
  });
// navbar current button styles end

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
});
