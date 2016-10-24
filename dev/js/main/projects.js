/*
 * Project grid
 */
function focusProjectsGrid(e){
  var $this = $(this),
      $active = $this.hasClass("grid_active"),
      $class = $this.attr("class").replace("grid-c ", "").replace("grid_active", "");

  $reset_project_view.addClass("overview_active");

  if($class == "project_website" && $active === false){
    removeActive();
    $project_grid_website.addClass("grid_active");
    $project_websites.addClass("grid_websites_active");
    $project_grid.addClass("small_grid");

    $project_github.removeClass("grid_github_active");
    $project_dnd.removeClass("grid_dnd_active");
    $project_random.removeClass("grid_random_active");
  }
  if($class == "project_github" && $active === false){
    removeActive();
    $project_grid_github.addClass("grid_active");
    $project_github.addClass("grid_github_active");
    $project_grid.addClass("small_grid");

    $project_websites.removeClass("grid_websites_active");
    $project_dnd.removeClass("grid_dnd_active");
    $project_random.removeClass("grid_random_active");
  }
  if($class == "project_dnd" && $active === false){
    removeActive();
    $project_grid_dnd.addClass("grid_active");
    $project_dnd.addClass("grid_dnd_active");
    $project_grid.addClass("small_grid");

    $project_websites.removeClass("grid_websites_active");
    $project_github.removeClass("grid_github_active");
    $project_random.removeClass("grid_random_active");
  }
  if($class == "project_random" && $active === false){
    removeActive();
    $project_grid_random.addClass("grid_active");
    $project_random.addClass("grid_random_active");
    $project_grid.addClass("small_grid");

    $project_websites.removeClass("grid_websites_active");
    $project_github.removeClass("grid_github_active");
    $project_dnd.removeClass("grid_dnd_active");
  }
  else{ }
}

function removeActive(){
  $project_websites.removeClass("grid_websites_active");
  $project_dnd.removeClass("grid_dnd_active");
  $project_github.removeClass("grid_github_active");
  $project_random.removeClass("grid_random_active");
  $project_grid_website.removeClass("grid_active");
  $project_grid_github.removeClass("grid_active");
  $project_grid_dnd.removeClass("grid_active");
  $project_grid_random.removeClass("grid_active");
}

function resetSmallGrid(){
  $project_websites.removeClass("grid_websites_active");
  $project_dnd.removeClass("grid_dnd_active");
  $project_github.removeClass("grid_github_active");
  $project_random.removeClass("grid_random_active");
  $project_grid_website.removeClass("grid_active");
  $project_grid_github.removeClass("grid_active");
  $project_grid_dnd.removeClass("grid_active");
  $project_grid_random.removeClass("grid_active");
  $project_grid.removeClass("small_grid");
  $reset_project_view.removeClass("overview_active");
}

/*
 * Set background-images
 */
function setBackgrounds(e){
  var $this = $(this),
      $this_id = $this.prop("id"),
      $this_grid = $this.find(".grid-c .bg"),
      name_url = "url(../images/projects/backgrounds/" + $this_id + ".png)";

  $this_grid.css("background-image", name_url);
}
