/*
 * Vars
 */
var $doc = $("html, body"), // General
    $tweets = $doc.find(".tweets"), // Twitter
    $tweets_btn = $tweets.find(".twit"),
    $overlay = $doc.find(".tweets_overlay"),
    $project = $doc.find(".project"), // Projects
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
    $news = $doc.find(".news"), // News
    $news_items = $news.find(".news-items"),
    $news_bell = $news.find(".bell");


/*
 * Let's get ready to rumble
 */
$(document).ready(function(){
  $tweets_btn.on("click", toggleTweet);
  $overlay.on("click", toggleTweet);
  $project_grid_website.on("click", focusProjectsGrid);
  $project_grid_github.on("click", focusProjectsGrid);
  $project_grid_dnd.on("click", focusProjectsGrid);
  $project_grid_random.on("click", focusProjectsGrid);
  $project_back.on("click", closeProjectFocus);
  $news_bell.on("click", toggleNews);
});
