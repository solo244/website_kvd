(function($) {

  // Vars
  var $doc = $("html, body"),
      $main_tutorial = $doc.find(".tutorial"),
      //$tut_search_block = $main_tutorial.find(".search-tut"),
      $tut_search = $main_tutorial.find("input"),
      $tut_empty = $main_tutorial.find(".clear"),
      $all_tutorials = $main_tutorial.find(".all-tuts"),
      $all_tutorials_blocks = $all_tutorials.find(".grid-item");

  // Events
  $tut_search.on("keyup", getResults);
  $tut_empty.on("click", emptySearch);
  emptySearch();

  // Show different results on search
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

  // Empty current search
  function emptySearch(){
    $tut_search.val("");
    $all_tutorials_blocks.removeClass("show_result");
  }

})(jQuery);
