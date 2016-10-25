/*
 * Show different results on search
 */
function hideAllTutorials(){
  //$all_tutorials_blocks.animate({"transform" : "scale(0.1)"}, 500);
}

function getResults(e){
  var $this = $(this).val().toLowerCase();

  if($this === ""){
    $all_tutorials_blocks.removeClass("show_result");
  }
  else{
    $all_tutorials_blocks.each(function(){
      var content = $(this).find("h3").text().toLowerCase();
      $(this).removeClass("show_result");
      if(content.indexOf($this) >= 0){
        $(this).addClass("show_result");
      }
    });
  }
}

function emptySearch(){
  $tut_search.val("");
  $all_tutorials_blocks.removeClass("show_result");
}
