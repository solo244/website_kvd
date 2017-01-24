function setUpSiema(){
  var mySiema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 3,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: false,
  });

  var $next = $(".next .arrow");
  var $prev = $(".previous .arrow");

  $next.on("click", function(){ mySiema.next(); });
  $prev.on("click", function(){ mySiema.prev(); });
}
