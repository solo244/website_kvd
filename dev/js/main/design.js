/*
* Load all the design images
*/
function setDesignImages(){

  var amount = myDesigns.length;
  console.log(myDesigns[amount-1].loc);
  for(i = 0; i < amount; i++){
    $design_grid.prepend("<div class='grid-item'><div class='grid-c'><a href='" + myDesigns[i].loc + "', target='_blank')><i class='icon dripicons-cart'></i>Buy</a><img src='../images/designs/products/design" + (i + 1) + "." + myDesigns[i].extension + "'/></div></div>");
  }
}
