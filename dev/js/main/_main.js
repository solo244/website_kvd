/*
 * Vars
 */
var $doc = $("html, body"),
    $tweets = $doc.find(".tweets"),
    $tweets_btn = $tweets.find(".twit"),
    $overlay = $doc.find(".tweets_overlay");

/*
 * Let's get ready to rumble
 */
$(document).ready(function(){
  $tweets_btn.on("click", toggleTweet);
  $overlay.on("click", toggleTweet);
});
