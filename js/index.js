$(document).ready(function() {
  $("#butt").click(function() {
    var searchTerm = $("#inputContent").val();
    document.getElementById("list").innerHTML = "";
    
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "";

    $.ajax({
      type: "GET",
      url: url,
      success: function(data) {

        for (var i = 0; i < data[1].length; i++) {
          $("#list").append("<li class='li col-md-10 col-md-offset-1'><a href='" + data[3][i] + "' target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
     var   element = document.getElementById("list")
     alignWithTop = true;
     element.scrollIntoView(alignWithTop);
        $("#inputContent").val(" ");
      }

    });
   $("#inputContent").keypress(function(e){
	if(e.which==13)
    $("#butt").click();
});
  });
});