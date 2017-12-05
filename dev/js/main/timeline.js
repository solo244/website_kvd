$(function() {

  // Vars
  var $doc = $("html, body"),
      $timeline = $doc.find(".timeline"),
      $timeline_c1 = $timeline.find(".c1"),
      $timeline_dates = $timeline_c1.find(".date"),
      $timeline_c2 = $timeline.find(".c2"),
      $timeline_c3 = $timeline.find(".c3");

  // Events
  $timeline_dates.hover(lineDown, lineUp);
  $(window).on("resize", setLengthTimeline);
  setLengthTimeline();

  // Calculate timeline length
  function setLengthTimeline(){
    var first = $timeline.find(".first").height() / 2,
        height = $timeline_c1.height(),
        height_middle = height - first + 20;

    $timeline_c2.animate({"height": height_middle}, 500);
  }

  // Draw line down
  function lineDown(e){
    var active_line = $(this),
        height = active_line.height() / 2,
        pos = active_line.position(),
        x = pos.top,
        new_x;

    if($(this).css("float") === "right"){
      new_x = (x + height) - 20 + "px";
    }
    else{
      new_x = (x + height) + 20 + "px";
    }

    $timeline_c3.stop().animate({"height": new_x}, 500);
  }

  // Move line up
  function lineUp(){
    $timeline_c3.stop().animate({"height": 0}, 2500);
  }

})(jQuery);
