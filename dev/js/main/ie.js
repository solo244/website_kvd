/*
 * Check if person is old and his browser is old and he should feel old
 */
function IEVersionCheck(){
  var jokeCount = 5,
      randJoke = Math.floor((Math.random() * jokeCount) + 1);
      tempDiv = $(document.createElement('div'));

  tempDiv.html("<!--[if lt IE 9]><i></i><![endif]-->");
  $(".joke").hide();

  var isIeLessThan9 = (tempDiv.find("i").length == 1);
  if (isIeLessThan9) {
    $(".fallback").removeClass("hide");
    $(".joke" + randJoke).show();
  }
  else{
    $(".fallback").remove();
    console.log("You've passed the test of using a good enough browser. Good for you man!");
  }
}

function closeFallback(){
  $(".fallback").addClass("hide");
  $(".fallback").remove();
}
