$(function() {

  // Get page title
  var pageTitle = $("html head title").html();

  // Change page title on blur
  $(window).blur(function() {
    $("html head title").html("Hey! This page is waiting!");
  });

  // Change page title back on focus
  $(window).focus(function() {
    $("html head title").html(pageTitle);
  });
  
})(jQuery);
