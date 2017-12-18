(function($) {

  //Vars
  var $doc = $("body"),
      savedTutorials = JSON.parse(localStorage.getItem("tutorials")) || [];

  if($doc.attr("data-ref")) {
    var add = $doc.attr("data-ref");
    setLocalstorage(add);
  }

  function setLocalstorage(extra) {
    savedTutorials.push(extra);
    var updatedSaved = Array.from(new Set(savedTutorials));
    localStorage.setItem("tutorials", JSON.stringify(updatedSaved));
  }

  $(".all-tuts-detail .grid-item").each(function() {
    var $this = $(this),
        href = $this.attr("data-visit");

    if(savedTutorials.indexOf(href) > 0) {
      $this.addClass("visited-grid-item");
    }
  });

})(jQuery);
