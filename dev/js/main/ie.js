/*
 * Check if person is old and his browser is old and he should feel old
 */
function IEVersionCheck(){
  var tempDiv = $(document.createElement('div'));
  console.log(tempDiv.html());
  tempDiv.html("<!--[if lt IE 9]><i></i><![endif]-->");
  var isIeLessThan9 = (tempDiv.find("i").length == 1);
  if (isIeLessThan9) {
    $(".fallback").removeClass("hide");
  }
  else{
    $(".fallback").remove();
    console.log("You've passed the test of using a good enough browser. Good for you man!");
  }
}
