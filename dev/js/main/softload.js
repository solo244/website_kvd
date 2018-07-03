(function($) {
  
  // Vars
  var images = $("img[load-src]");
  var holders = $("div[load-src]");

  // Change all src images
  holders.each(function() {
    var $this = $(this),
        data = ".." + $this.attr("load-src"),
        result = "background-image: url(" + data + ");",
        imgPreload = new Image();

    console.log(data);
    $(imgPreload).attr({"src": data});
    
    if (imgPreload.complete || imgPreload.readyState === 4) {
      console.log("Loaded from cache");
      $this.removeAttr("load-src");
      $this.attr("style", result);
    } else {
      console.log("Let's start loading");
      var count = 0;
      var timer = setInterval(function(){ 
        count++;
        console.log(count + "seconds"); 
      }, 1000);

      $(imgPreload).on("load", function (response, status, xhr) {
        clearInterval(timer);
        if (status == 'error') {
          console.log("Image " + data + " could not be loaded");
        } else {
          console.log("Loaded!");
          $this.removeAttr("load-src");
          $this.attr("style", result);
        }
      });
    }
  });

  // Load images and show
  images.each(function() {
    var $this = $(this),
    data = $this.attr("load-src");
    $this.attr("src", data);
    $this.onload = function() {
      $this.removeAttr("load-src");
    };
  });
  
})(jQuery);