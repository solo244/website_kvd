/*
 * Setup the middle line in the timeline
 */
function setLengthTimeline(){
  var first = $timeline.find(".first").height() / 2,
      height = $timeline_c1.height(),
      height_middle = height - first + 20,
      height_overlap = 0;

  $timeline_c2.animate({"height": height_middle}, 500);
}

function lineDown(e){
  var active_line = $(this),
      height = active_line.height() / 2,
      pos = active_line.position(),
      x = pos.top,
      new_x;

  if($(this).css("float") == "right"){
    new_x = (x + height) - 20 + "px";
  }
  else{
    new_x = (x + height) + 20 + "px";
  }

  $timeline_c3.stop().animate({"height": new_x}, 500);
}

function lineUp(){
  $timeline_c3.stop().animate({"height": 0}, 2500);
}