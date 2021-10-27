$(document).ready(function () {
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
});
