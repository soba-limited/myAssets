$(window).on("scroll on resize",function(){
  var headerHeight = $("header").outerHeight();
  if($(window).scrollTop() > headerHeight && !$("article.toggle-wrap").hasClass("on")){
    $("article.toggle-wrap").addClass('on');
  }
});

$("button.spnav-toggle").on("click",function(){
  $("section.sp-nav-wrap").toggleClass('on');
});

var scrollElm = (function() {
  if('scrollingElement' in document) {
    return document.scrollingElement;
  }
  if(navigator.userAgent.indexOf('WebKit') != -1) {
    return document.body;
  }
  return document.documentElement;
})();

$(document).on('click','a[href^="#"]', function() {
  var speed = 800;
  var href= $(this).attr("href");
  var wh = $(href == "#" ? 'html' : href).offset().top;
  $(scrollElm).animate({
    scrollTop:wh
  }, speed);
  return false;
});
