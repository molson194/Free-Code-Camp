var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","brunofin","comster404","test_channel","cretetion","sheevergaming","TR7K","OgamingSC2","ESL_SC2"];

$(document).ready(function() {
  channels.forEach(function(channel) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + channel + "?callback=?", function(data) {
      var game, status;
      console.log(data);
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
      $.getJSON("https://api.twitch.tv/kraken/channels/" + channel + "?callback=?", function(data) {
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row ' + 
          status + '"><div class="col-xs-10 col-sm-3" id="name"><a href="' + 
          data.url + '" target="_blank">' + 
          channel + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
          game + '<span class="hidden-xs">' + 
          description + '</span></div></div>';
        status === "online" ? $("#display").prepend(html) : $("#display").append(html);
      });
    });
  });
});