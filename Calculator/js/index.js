var operation = null;
var first = 0.0;

$(document).ready(function() {
  $('button').on('click', pressedButton);
});

function pressedButton() {
  var val = $(this).attr("value");
  var prev = $("#previous").text();
  var current = $("#current").text();
  
  if (val === "C") {
    $("#previous").html("0");
    $("#current").html("0");
  } else if (val === "=") {
    if (operation === "+") {
      var answer = parseFloat(first) + parseFloat(current);
    } else if (operation === "-"){
      var answer = parseFloat(first) - parseFloat(current);
    } else if (operation === "/"){
      var answer = parseFloat(first) / parseFloat(current);
    } else if (operation === "x"){
      var answer = parseFloat(first) * parseFloat(current);
    }
    operation = null;
    first = 0.0;
    $("#current").html(answer);
  } else if (val === "+") {
    if (operation === null) {
      first = parseFloat(current);
    } else {
      first = getFirst(first, current, operation);
    }
    operation = "+"
    $("#current").html("0");
    $("#previous").html(prev+val);
  } else if (val === "-") {
    if (operation === null) {
      first = parseFloat(current);
    } else {
      first = getFirst(first, current, operation);
    }
    operation = "-"
    $("#current").html("0");
    $("#previous").html(prev+val);
  } else if (val === "/") {
    if (operation === null) {
      first = parseFloat(current);
    } else {
      first = getFirst(first, current, operation);
    }
    operation = "/"
    $("#current").html("0");
    $("#previous").html(prev+val);
  } else if (val === "x") {
    if (operation === null) {
      first = parseFloat(current);
    } else {
      first = getFirst(first, current, operation);
    }
    operation = "x"
    $("#current").html("0");
    $("#previous").html(prev+val);
  } else {
    $("#previous").html(prev+val);
    $("#current").html(current+val);
  }
}

function getFirst(num1, num2, op) {
  if (op === "+") {
    return parseFloat(num1)+parseFloat(num2);
  } else if (op === "x") {
    return parseFloat(num1)*parseFloat(num2);
  } else if (op === "/") {
    return parseFloat(num1)/parseFloat(num2);
  } else if (op === "-") {
    return parseFloat(num1)-parseFloat(num2);
  }
}