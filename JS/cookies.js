$(document).ready(function () {
  $(".cookie-banner").delay(2000).fadeIn();
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
});
