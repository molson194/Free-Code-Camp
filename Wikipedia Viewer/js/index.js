var string = "kim";

$(document).ready(function() {
  $('#search').on('click', getData);
  getData();
});
  
function getData() {
  string = $('#text').val();
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&titles="+string+"&prop=revisions&rvprop=content&format=json&callback=?", function(data) {
    for (var key in data.query.pages) {
      if (data.query.pages[key].hasOwnProperty("revisions")) {
        var data = data.query.pages[key].revisions[0]["*"].split("[[");
        var wiki = "";
        for (var i = 1; i < data.length; i++){
            var edit = data[i].split("]]")[1].split("{{")[0].split("==")[0];
            var string = edit.replace(", ", "").replace("*","").replace('"','');
            wiki = wiki + "<h4>" + data[i].split("]]")[0] + "</h4><p>" + string.charAt(0).toUpperCase() + string.slice(1) + "</p><br>";
            
        }
        $("#wikiData").html(wiki);
       
      }
    }
  });
}