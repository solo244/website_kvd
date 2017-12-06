$(function() {

  // Vars
  var $doc = $("html, body"),
      $news = $doc.find(".news"),
      currentNews = 1,
      $news_next = $news.find(".next"),
      $news_prev = $news.find(".previous"),
      $news_items = $news.find(".news-items"),
      $news_holder = $doc.find(".news_holder"),
      $news_bell = $news.find(".bell");

  // Events
  $news_bell.on("click", toggleNews);
  $news_next.find(".tri").on("click", gotoNextNews);
  $news_next.find(".arro").on("click", gotoNextNews);
  $news_prev.find(".tri").on("click", gotoNextPrev);
  $news_prev.find(".arro").on("click", gotoNextPrev);

  // Toggle news
  function toggleNews(e){
    var $this = $(this);
    $news_items.toggleClass("news-items_active");
  }

  //Set news items
  function setNewsItems(){
    var number = $news_holder.find(".grid-item").length;
    $news_holder.find("h2 span").html(number);
  }

  // Slideshow navigation
  function gotoNextNews(){
    var number = $news_holder.find(".grid-item").length;

    console.log(number);
  }

  function gotoNextPrev(){
    var number = $news_holder.find(".grid-item").length;

    console.log(number);
  }

  function navigateSlideshow(){

  }

})(jQuery);
