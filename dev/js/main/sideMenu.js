/*
 * Set the position of the sidemenu (tutorials) on scroll
 */
function setSideMenu(e){
  var scroll = $(window).scrollTop();

  if(scroll > 500){
    $side_menu.addClass("scrollTop");
  }
  else{
    $side_menu.removeClass("scrollTop");
  }
}
