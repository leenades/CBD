// AOS.init();
window.onload=function() {
  calculateCompoundIntrest();
};
function CompoundCalculation(pv,r,ap,cp,ma,mp,addpayStart)
{
    var j;
    var dataYearly = [];
    var prevv=pv;
    var val=[prevv];
    if( addpayStart==0 ) val[0]=prevv+ap;
    for(var i=0; i<mp; i++) {
        val[i]=prevv;
        j=(i+1)/ma;
        if( j==Math.round(j) && addpayStart==0 )
        val[i]+=ap;
        j=(i+1)/cp;
        if( j==Math.round(j) )
        val[i]=val[i]*(1+r/100.0);
        j=(i+1)/ma;
        if( j==Math.round(j) && addpayStart==1 )
        val[i]+=ap;
        prevv=val[i];
    }

    if(mp>30){
        dataYearly = val.filter(function(v, index, arr) {
            return (index+1) % 12 == 0;
        });
        dataYearly.unshift(pv);
        return dataYearly
    } else {
        val.unshift(pv);
        return val;
    }
}

function calculateCompoundIntrest() {
    // values from input
    var preVal = document.getElementById("startingAmount").value;
    var rate = document.getElementById("growth").value;
    var additionalPayment = document.getElementById("additionalAmount").value;

    var period = 30; //no of years 
    var addpayStart = 0; //payment at the start of month
    
    //if form is empty or not added any value
    if( preVal=='' ) preVal='1000';
    if( additionalPayment=='' ) additionalPayment='0';
    if( rate=='' ) rate='10';

    //converting string values in number
    var preVal = parseFloat(preVal);
    var additionalPayment = parseFloat(additionalPayment);
    if(preVal==0) preVal=additionalPayment;
    rate = parseFloat(rate);
    var compoundYearly = 1; //compound intrest yearly
    var monthlyAddPayment = 12; // Adding additional fund Monthly
    if( additionalPayment==0 ) monthlyAddPayment=1;
    var periodYearly = 1; //Period 30 Years * 1
    period /= periodYearly; // convert to years
    var period1 = period*compoundYearly;
    var period2 = period*monthlyAddPayment;
    rate /= compoundYearly;
    var ratio=monthlyAddPayment/compoundYearly;
    var maxperiod = period1>period2?period1:period2;
    var compoundPeriod=12/compoundYearly;
    var monthlyAdditional=12/monthlyAddPayment;
    if( (compoundPeriod>=monthlyAdditional) && ((compoundPeriod/monthlyAdditional)==Math.round(compoundPeriod/monthlyAdditional)) ) { compoundPeriod/=monthlyAdditional; monthlyAdditional=1; }
    else if( (monthlyAdditional>compoundPeriod) && ((monthlyAdditional/compoundPeriod)==Math.round(monthlyAdditional/compoundPeriod)) ) { monthlyAdditional/=compoundPeriod; compoundPeriod=1; }
    //call for CBD Data
    var CBDValue = CompoundCalculation(preVal,rate,additionalPayment,compoundPeriod,monthlyAdditional,maxperiod,addpayStart);
     //call for Saving Data
    var savingAcc = CompoundCalculation(preVal,1,additionalPayment,compoundPeriod,monthlyAdditional,maxperiod,addpayStart);
    
    //final Values
    var totalCBD= CBDValue[CBDValue.length-1];
    var totalSaving = savingAcc[savingAcc.length-1];
    
    //conversion of value
    totalCBD = totalCBD.toFixed(0);
    totalSaving = totalSaving.toFixed(0)

    //Adding $  value in value 
    totalCBD = '$' +totalCBD;
    totalSaving = '$' +totalSaving

    // for adding commas in value
    totalCBD = numberWithCommas(totalCBD);
    totalSaving = numberWithCommas(totalSaving);

    // assigning value on UI
    $('#savingvalue').html(totalSaving);
    $('#cbdValue').html(totalCBD);

    CBDVal=CBDValue; savingAccountValue=savingAcc; pay=additionalPayment;
}
function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
$('#additionalAmount').on('change', function(){
  $('.monthlyinvest').html('$'+ numberWithCommas($('#additionalAmount').val()));
});
$('#growth').on('change', function(){
    switch ($(this).val()) {
        case '10':
            $('.growthind').html("High Growth");
          break;
        case '8':
            $('.growthind').html("Growth");
          break;
        case '6':
            $('.growthind').html("Balanced");
          break;
        case '4':
            $('.growthind').html("Conservative");
    }
});
$('#startingAmount').on('change', function(){
  $('.startingInvest').html('$' + numberWithCommas($('#startingAmount').val()));
});

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
