// sidebar-menu
$(document).ready(function(){
  $(".wrapper .items-container .side-left .section .dropdown").click(function(){
    $(this).toggleClass("expand").siblings().removeClass('expand');
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".wrapper .s-product .row").addClass("stick");
    } else {
      $(".wrapper .s-product .row").removeClass("stick");
    }
  });
});
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {
      $(".wrapper .s-product").addClass("abc");
    } else {
      $(".wrapper .s-product").removeClass("abc");
    }
  });
});