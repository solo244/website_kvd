/*
 * Project grid
 */
function focusProjectsGrid(e){
  var $this = $(this),
      $class = $this.attr("class").replace("grid-c ", "");

  closeProjectFocus();

  if($class == "project_website"){
    $project_websites.addClass("grid_websites_active");
    $project_websites.on("click", closeProjectFocus);
  }
  if($class == "project_github"){
    $project_github.addClass("grid_github_active");
    $project_github.on("click", closeProjectFocus);
  }
  if($class == "project_dnd"){
    $project_dnd.addClass("grid_dnd_active");
    $project_dnd.on("click", closeProjectFocus);
  }
  if($class == "project_random"){
    $project_random.addClass("grid_random_active");
    $project_random.on("click", closeProjectFocus);
  }
}

function closeProjectFocus(e){
  $project_websites.removeClass("grid_websites_active");
  $project_github.removeClass("grid_github_active");
  $project_dnd.removeClass("grid_dnd_active");
  $project_random.removeClass("grid_random_active");
}
