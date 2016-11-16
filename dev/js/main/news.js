/*
* Toggle news
*/
function toggleNews(e){
  var $this = $(this);

  $news_items.toggleClass("news-items_active");
}

/*
* Set news items
*/
function setNewsItems(){
  var number = $news_holder.find(".grid-item").length;
  
  $news_holder.find("h2 span").html(number);
}
