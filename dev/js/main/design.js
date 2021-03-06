(function($) {

  // Vars
  var $doc = $("html, body"),
      $design = $doc.find(".design"),
      $design_grid = $design.find(".design_portfolio");

  // Data
  var myDesigns = [
    {n: "1", extension: "png", loc: "13028763-bend-it"},
    {n: "2", extension: "png", loc: "13079461-it-isnt-bob"},
    {n: "3", extension: "png", loc: "13023768-ceci-nest-pas-une-coque"},
    {n: "4", extension: "png", loc: "13046008-every-man-has-his-price"},
    {n: "5", extension: "png", loc: "13079356-common-math-problem"},
    {n: "6", extension: "png", loc: "13045925-por-que-no"},
    {n: "7", extension: "png", loc: "13028773-trust-me-im-a-doctor"},
    {n: "8", extension: "png", loc: "13079267-digging-for-a-poem"},
    {n: "9", extension: "jpg", loc: "13930630-real-pixels-have-curves"},
    {n: "10", extension: "jpg", loc: "14106891-not-the-quote-you-are-looking-for"},
    {n: "11", extension: "jpg", loc: "14230404-ill-copy-what-hes-pasting"},
    {n: "12", extension: "jpg", loc: "14283947-ill-copy-what-shes-pasting"},
    {n: "13", extension: "jpg", loc: "14353569-design-means-never-having-to-say-what-template-youve-used"},
    {n: "14", extension: "jpg", loc: "14486341-in-your-face"},
    {n: "15", extension: "png", loc: "14529247-you-want-the-algorithm"},
    {n: "16", extension: "jpg", loc: "14584329-iball"},
    {n: "17", extension: "jpg", loc: "14629376-say-hello-to-my-little-friend"},
    {n: "18", extension: "jpg", loc: "14691278-i-see-dead-pixels"},
    {n: "19", extension: "jpg", loc: "14755541-dont-put-all-your-eggs-in-one-basket"},
    {n: "20", extension: "jpg", loc: "14821710-all-hail-the-president"},
    {n: "21", extension: "jpg", loc: "14920389-everything-is-if-youre-brave-enough"},
    {n: "22", extension: "jpg", loc: "15012773-i-have-always-depended-on-the-kindness-of-strangers"},
    {n: "23", extension: "jpg", loc: "15098323-may-the-wifi-be-with-you"},
    {n: "24", extension: "jpg", loc: "15181960-cannibalism-not-ok"},
    {n: "25", extension: "jpg", loc: "15258745-friends-dont-let-friends-use-internet-explorer"},
    {n: "26", extension: "jpg", loc: "15331529-chameleon"},
    {n: "27", extension: "jpg", loc: "15405965-every-day-im-shoveling"},
    {n: "28", extension: "jpg", loc: "15648878-you-are-going-to-need-a-bigger-resolution"},
    {n: "29", extension: "jpg", loc: "15738973-when-all-else-fails-just-hold-ctrl-alt-delete"},
    {n: "30", extension: "jpg", loc: "15817269-i-feel-the-need-the-need-for-speed"},
    {n: "31", extension: "jpg", loc: "15890981-ive-missed-you"},
    {n: "32", extension: "jpg", loc: "15956305-precious-smartphone"},
    {n: "33", extension: "jpg", loc: "16011083-keep-calm-and-download-another-browser"},
    {n: "34", extension: "jpg", loc: "16068556-choose-your-weapon"},
    {n: "35", extension: "jpg", loc: "16170014-no-dino"},
    {n: "36", extension: "jpg", loc: "16329922-i-like-saying-no"},
    {n: "37", extension: "jpg", loc: "16493372-its-a-trap"}
  ];

  // Events
  //setDesignImages();

  // Load all the design images
  function setDesignImages(){
    var amount = myDesigns.length;

    for(var i = 0; i < amount; i++){
      $design_grid.prepend("<div class='grid-item'><div class='grid-c grid-c-design'><a href='http://www.redbubble.com/people/solo244/works/" + myDesigns[i].loc + "', target='_blank')><i class='icon dripicons-cart'></i>Buy</a><img width='300' height='300' class='lazy' data-original='../images/designs/products/design" + (i + 1) + "." + myDesigns[i].extension + "'/></div></div>");
    }

    $("img.lazy").lazyload({
      threshold : 200,
      effect : "fadeIn"
    });
  }

  setDesignImages();

})(jQuery);
