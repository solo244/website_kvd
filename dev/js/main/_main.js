/*
 * Vars
 */
var $doc = $("html, body"), // General
    $tweets = $doc.find(".tweets"), // Twitter
    $tweets_btn = $tweets.find(".twit"),
    $overlay = $doc.find(".tweets_overlay"),
    $project = $doc.find(".project"), // Projects
    $project_grid = $project.find(".projects_portfolio"),
    $project_grid_website = $project_grid.find(".project_website");

/*
 * Let's get ready to rumble
 */
$(document).ready(function(){
  $tweets_btn.on("click", toggleTweet);
  $overlay.on("click", toggleTweet);
  $project_grid_website.on("click", focusProjectsGrid);
});
