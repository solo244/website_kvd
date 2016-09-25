/*
 * Tweet feed
 */
function toggleTweet(){
  var $this = $(this),
      $feed = $doc.find(".feed");

  $tweets.toggleClass("tweets_active");
  $feed.toggleClass("tweetfeed");
  $overlay.toggleClass("active_overlay");
  $doc.toggleClass("body_overflow");
}
