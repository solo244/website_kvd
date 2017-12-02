/*
* Load all the design images
*/
function setDesignImages(){
  var amount = myDesigns.length;

  for(i = 0; i < amount; i++){
    $design_grid.prepend("<div class='grid-item'><div class='grid-c grid-c-design'><a href='" + myDesigns[i].loc + "', target='_blank')><i class='icon dripicons-cart'></i>Buy</a><img width='300' height='300' class='lazy' data-original='../images/designs/products/design" + (i + 1) + "." + myDesigns[i].extension + "'/></div></div>");
  }

  $("img.lazy").lazyload({
    threshold : 200,
    effect : "fadeIn"
  });
}
