var sessionTime;
var breakTime;
var isSession;
var isBreak;
var myVar = setInterval(myTimer, 1000);

$( document ).ready(function() {
    $('#timer').hide();
});

$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});
$('.Timer').click(function() {
  if ($(this).html() == "Start Timer") {
    $('#set').hide();
    $('#timer').show();
    sessionTime = $('#1').val()*60;
    breakTime = $('#2').val()*60;
    $('#timer').html(sessionTime + " session seconds");
    isSession = true;
    $(this).html("Stop Timer");
  } else {
    $('#set').show();
    $('#timer').hide();
    isSession = false;
    isBreak = false;
    $(this).html("Start Timer");
  }
});

function myTimer() {
  if (isSession) {
    $('#timer').html(sessionTime + " session seconds");
    if (sessionTime == 0) {
      isSession = false;
      isBreak = true;
    }
    sessionTime--;
  } else if (isBreak) {
    $('#timer').html(breakTime + " break seconds");
    if (breakTime == 0) {
      $('#set').show();
      $('#timer').hide();
      isSession = false;
      isBreak = false;
      $(this).html("Start Timer");
    }
    breakTime--;
  }
}