// AOS.init();

$(document).ready(function () {
  $(".back-to-styles").on("click", function () {
    $(this).addClass('clicked');
    if($(this).hasClass('clicked')){
      $(this).addClass('closed');
      if($('ul.dropdown-menu.sub-menu02').hasClass('show') && $(this).hasClass('clicked')){
        $('.dropdown-menu.sub-menu02').removeClass('show');
        $('.dropdown.drop-down02').removeClass('show');
      }
      return false;
    }
  });

  $('.primary-nav-item').on('click', function(e) {
    e.preventDefault();
    $(".primary-nav-item").removeClass('current-item');
    $(this).addClass('current-item');
  });

  $('.main-mob-nav-items').on('click', function(e) {
    e.preventDefault();
    $(".main-mob-nav-items").removeClass('current-item');
    $(this).addClass('current-item');
    if($(this).hasClass('current-item')){
      $(".main-mob-nav-items").children().removeClass('show');
      $(this).children().addClass('show');
    } 
  });
  $('.inner-sub-menu-mob-items').on('click', function(e) {
    e.preventDefault();
    $(".inner-sub-menu-mob-items").removeClass('current-item');
    $(this).addClass('current-item');
    if($(this).hasClass('current-item')){
      $(".inner-sub-menu-mob-items").children().removeClass('show');
      $(this).children().addClass('show');
    } 
  });
  

  $("#item-5677").on("mouseover", function () {
    $(this).addClass("hover");
    $("#item-5677 .secondary-nav-inner-dropdowns").addClass("show");
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
    if ($("#item-5678, #item-5677").hasClass("hover")) {
      $("#item-5678, #item-5677").removeClass("hover");
      $(
        "#item-5678 .secondary-nav-inner-dropdowns, #item-5677 .secondary-nav-inner-dropdowns"
      ).removeClass("show");
    }
  });
  $("#item-5677, #item-5678, #item-5679").on("mouseleave", function () {
    $(
      "#item-5678 .secondary-nav-inner-dropdowns, #item-5677 .secondary-nav-inner-dropdowns, #item-5679 .secondary-nav-inner-dropdowns"
    ).removeClass("show");
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
  (function ($bs) {
    const CLASS_NAME = "has-child-dropdown-show";
    $bs.Dropdown.prototype.toggle = (function (_orginal) {
      return function () {
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (
          ;
          dd && dd !== document;
          dd = dd.parentNode.closest(".dropdown")
        ) {
          dd.classList.add(CLASS_NAME);
        }
        return _orginal.call(this);
      };
    })($bs.Dropdown.prototype.toggle);

    document.querySelectorAll(".dropdown").forEach(function (dd) {
      dd.addEventListener("hide.bs.dropdown", function (e) {
        if (this.classList.contains(CLASS_NAME)) {
          this.classList.remove(CLASS_NAME);
          e.preventDefault();
        }
        if (
          e.clickEvent &&
          e.clickEvent
            .composedPath()
            .some(
              (el) =>
                el.classList && el.classList.contains("dropdown-toggle")
            )
        ) {
          e.preventDefault();
        }
        e.stopPropagation(); // do not need pop in multi level mode
      });
    });

    // for hover
    function getDropdown(element) {
      return $bs.Dropdown.getInstance(element) || new $bs.Dropdown(element);
    }

    document
      .querySelectorAll(".dropdown-hover, .dropdown-hover-all .dropdown")
      .forEach(function (dd) {
        dd.addEventListener("mouseenter", function (e) {
          let toggle = e.target.querySelector(
            ':scope>[data-bs-toggle="dropdown"]'
          );
          if (!toggle.classList.contains("show")) {
            getDropdown(toggle).toggle();
          }
        });
        dd.addEventListener("mouseleave", function (e) {
          let toggle = e.target.querySelector(
            ':scope>[data-bs-toggle="dropdown"]'
          );
          if (toggle.classList.contains("show")) {
            getDropdown(toggle).toggle();
          }
        });
      });
  })(bootstrap);
});
