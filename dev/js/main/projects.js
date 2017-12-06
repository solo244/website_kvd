(function($) {

  // Vars
  var $doc = $("html, body"),
      $project = $doc.find(".project"),
      $reset_project_view = $project.find(".containerHolderProjects .overview"),
      $reset_project_grid = $project.find(".back"),
      $project_grid = $project.find(".projects_portfolio"),
      $project_grid_website = $project_grid.find(".project_website"),
      $project_grid_github = $project_grid.find(".project_github"),
      $project_grid_dnd = $project_grid.find(".project_dnd"),
      $project_grid_random = $project_grid.find(".project_random"),
      $project_websites = $project.find(".grid_websites"),
      $project_github = $project.find(".grid_github"),
      $project_dnd = $project.find(".grid_dnd"),
      $project_random = $project.find(".grid_random"),
      //$project_back = $project.find(".back"),
      $project_bg = $project.find(".grid-item");

  // Events
  $project_grid_website.on("click", focusProjectsGrid);
  $project_grid_github.on("click", focusProjectsGrid);
  $project_grid_dnd.on("click", focusProjectsGrid);
  $project_grid_random.on("click", focusProjectsGrid);
  $project_bg.each(setBackgrounds);
  $reset_project_grid.on("click", resetSmallGrid);

  // Project grid
  function focusProjectsGrid(e){
    var $this = $(this),
        $active = $this.hasClass("grid_active"),
        $class = $this.attr("class").replace("grid-c ", "").replace("grid_active", "");

    $reset_project_view.addClass("overview_active");

    if($class === "project_website" && $active === false){
      removeActive();
      $project_grid_website.addClass("grid_active");
      $project_websites.addClass("grid_websites_active");
      $project_grid.addClass("small_grid");

      $project_github.removeClass("grid_github_active");
      $project_dnd.removeClass("grid_dnd_active");
      $project_random.removeClass("grid_random_active");
    }
    if($class === "project_github" && $active === false){
      removeActive();
      $project_grid_github.addClass("grid_active");
      $project_github.addClass("grid_github_active");
      $project_grid.addClass("small_grid");

      $project_websites.removeClass("grid_websites_active");
      $project_dnd.removeClass("grid_dnd_active");
      $project_random.removeClass("grid_random_active");
    }
    if($class === "project_dnd" && $active === false){
      removeActive();
      $project_grid_dnd.addClass("grid_active");
      $project_dnd.addClass("grid_dnd_active");
      $project_grid.addClass("small_grid");

      $project_websites.removeClass("grid_websites_active");
      $project_github.removeClass("grid_github_active");
      $project_random.removeClass("grid_random_active");
    }
    if($class === "project_random" && $active === false){
      removeActive();
      $project_grid_random.addClass("grid_active");
      $project_random.addClass("grid_random_active");
      $project_grid.addClass("small_grid");

      $project_websites.removeClass("grid_websites_active");
      $project_github.removeClass("grid_github_active");
      $project_dnd.removeClass("grid_dnd_active");
    }
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

  // Set background-images
  function setBackgrounds(e){
    var $this = $(this),
        $this_id = $this.prop("id"),
        $this_grid = $this.find(".grid-c .bg"),
        name_url = "url(../images/projects/backgrounds/" + $this_id + ".png)";

    $this_grid.css("background-image", name_url);
  }

})(jQuery);
