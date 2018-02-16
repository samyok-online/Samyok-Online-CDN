//aops.js
var version = "0.0.1";
// $("<script />").attr("src", "https://cd
// a file for the aops mod
// created by @techguy2
var username = $(".username.no-select").text();
$(".username.no-select").text(username+" is running AoPS mod version "+version".");
$("<dashboard />").appendTo("body")
  .attr("style", "position: fixed; bottom: 0; width: 100%; background-color: red; padding: 2px;");
$("<button />").appendTo("dashboard")
  .text("Upvote All")
  .attr("style", "padding:10px")
  .attr("onclick", 'upvoteAll();');
function upvoteAll(){
  $("span.cmty-post-thank").each(function(){
    if($(this).text() != "{"){
      $(this).click();
    }
  })
}
