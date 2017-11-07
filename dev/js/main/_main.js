/*
 * Vars
 */
var $doc = $("html, body"), // General
    $project = $doc.find(".project"), // Projects
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
    $project_back = $project.find(".back"),
    $project_bg = $project.find(".grid-item"),
    $news = $doc.find(".news"), // News
    currentNews = 1,
    $news_next = $news.find(".next"),
    $news_prev = $news.find(".previous"),
    $news_items = $news.find(".news-items"),
    $news_holder = $doc.find(".news_holder"),
    $news_bell = $news.find(".bell"),
    $tutorials = $doc.find(".tutorial-content"), // Tutorials
    $side_menu = $tutorials.find(".sideMenu"),
    $main_tutorial = $doc.find(".tutorial"),
    $tut_search_block = $main_tutorial.find(".search-tut"),
    $tut_search = $main_tutorial.find("input"),
    $tut_empty = $main_tutorial.find(".clear"),
    $all_tutorials = $main_tutorial.find(".all-tuts"),
    $all_tutorials_blocks = $all_tutorials.find(".grid-item"),
    $timeline = $doc.find(".timeline"), // Timeline
    $timeline_c1 = $timeline.find(".c1"),
    $timeline_dates = $timeline_c1.find(".date"),
    $timeline_c2 = $timeline.find(".c2"),
    $timeline_c3 = $timeline.find(".c3"),
    $design = $doc.find(".design"), // Designs
    $design_grid = $design.find(".design_portfolio"),
    $fallback_close = $doc.find(".fallback .close");

/*
 * Let's get ready to rumble
 */
$(document).ready(function(){
  // Projects
  $project_grid_website.on("click", focusProjectsGrid);
  $project_grid_github.on("click", focusProjectsGrid);
  $project_grid_dnd.on("click", focusProjectsGrid);
  $project_grid_random.on("click", focusProjectsGrid);
  $project_bg.each(setBackgrounds);
  $reset_project_grid.on("click", resetSmallGrid);
  // News
  $news_bell.on("click", toggleNews);
  $news_next.find(".tri").on("click", gotoNextNews);
  $news_next.find(".arro").on("click", gotoNextNews);
  $news_prev.find(".tri").on("click", gotoNextPrev);
  $news_prev.find(".arro").on("click", gotoNextPrev);
  // Timeline
  $timeline_dates.hover(lineDown, lineUp);
  // Tutorials
  $tut_search.on("keyup", getResults);
  $tut_empty.on("click", emptySearch);
  // Fallback
  $fallback_close.on("click", closeFallback);
  // Initiate
  $(window).scroll(setSideMenu);
  $(window).on("resize", setLengthTimeline);
  setLengthTimeline();
  emptySearch();
  setDesignImages();
  setNewsItems();
  IEVersionCheck();

  //console.log($news_bell);
});
