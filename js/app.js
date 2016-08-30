$(document).ready(function() {

  var $screen = $('#screen');
  var $number = $('.number');
  var $operator = $('.operator');
  var $clear = $('#clear');
  var $equal = $('#equals');

  $($number).on('click', numberShown);
  $($operator).on('click', operatorShown);
  $($clear).on('click', clearScreen);
  $($equal).on('click', math);

  //Numbers showing on screen
  function numberShown(ev) {
    var $evTarget = $(ev.target).text();
    $($screen).append($evTarget);
  }

  //Operators showing on screen
  function operatorShown(ev) {
    var $evTarget = $(ev.target).text();
    $($screen).append($evTarget);
  }

  //Clear the screen
  function clearScreen() {
    $screen.text("");
  }

  //Do maths
  function math() {
    var screen = $screen.text();
    var newScreenSplit = screen.split("");
    newScreenSplit.pop();
    var newScreen = newScreenSplit.join("");

    var regexp = /^(\-?\d+)(\+|\-|x|÷)(\-?\d+)$/;
    var matches = newScreen.match(regexp);

    if (matches === null) {
      $screen.text('Error');
      return;
    }

    var number1 = parseInt(matches[1], 10);
    var number2 = parseInt(matches[3], 10);
    var operator = matches[2];
    var total = 0;

    if (operator === '+') {
      total = number1 + number2;
    } else if (operator === '-') {
      total = number1 - number2;
    } else if (operator === 'x') {
      total = number1 * number2;
    } else if (operator === '÷') {
      if (number2 === 0) {
        $screen.text('Error');
        return;
      } else {
        total = number1 / number2;
      }
    }

    var totalString = total.toString();
    $screen.text(totalString);
  }

});
