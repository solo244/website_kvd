(function($) {

  // Vars
  var $doc = $("html, body"),
      $tutorials = $doc.find(".tutorial-content"),
      $side_menu = $tutorials.find(".sideMenu");

  // Events
  $(window).scroll(setSideMenu);

  // Add scroll top when passed 500px
  function setSideMenu(e){
    var scroll = $(window).scrollTop();

    if(scroll > 500){
      $side_menu.addClass("scrollTop");
    }
    else{
      $side_menu.removeClass("scrollTop");
    }
  }

})(jQuery);
