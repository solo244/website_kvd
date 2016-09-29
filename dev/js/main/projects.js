/*
 * Project grid
 */
function focusProjectsGrid(e){
  var $this = $(this),
      $class = $this.attr("class").replace("grid-c ", "");

  if($class == "project_website"){
    $project_websites.addClass("grid_websites_active");
  }
}

function closeProjectFocus(e){
  $project_websites.removeClass("grid_websites_active");
}
