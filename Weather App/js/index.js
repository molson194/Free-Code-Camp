var temp = 0;
var cels = true;

$(document).ready(function() {
    $('#unit').on('click', changeUnit);
  navigator.geolocation.getCurrentPosition(function(location) {
    $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+location.coords.latitude+"&lon="+ location.coords.longitude+"&APPID=e36c51e09e53c3817faab9a9d69ce41d",function(json){
      $("#location").html(json.name + ", " + json.sys.country);
      temp = json.main.temp - 273.15;
      $("#temp").html(Math.round(temp) + " &#176;");
      $("#type").html(json.weather[0].main);
      switch (json.weather[0].main.toLowerCase()){
        case 'drizzle':
          $('#icon').attr("http://l.kymesonet.org/bradd/rain_icon_white.png");
          break;
        case 'clouds':
            $('#icon').attr('src',"http://chorus.bg/wp-content/uploads/2015/05/iCloud-icon-white.png");
          break;
        case 'rain':
          $('#icon').attr("http://l.kymesonet.org/bradd/rain_icon_white.png");
          break;
        case 'snow':
          $('#icon').attr("http://www.iconsdb.com/icons/preview/white/snow-xxl.png");
          break;
        case 'clear':
          $('#icon').attr('src',"http://www.iconsdb.com/icons/preview/white/sun-8-xxl.png");
          break;
        case 'thunderstom':
          $('#icon').attr("http://www.clker.com/cliparts/2/7/r/J/M/y/storm-hi.png");
          break;
        default:
      }
    });
  });
});

function changeUnit() {
  if (cels) {
    $("#temp").html(Math.round(temp*9/5 + 32) + " &#176;");
    $("#unit").html("F");
  } else {
    $("#temp").html(Math.round(temp) + " &#176;");
    $("#unit").html("C");
  }
  cels = !cels;
}