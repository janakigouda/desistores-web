// sidebar-menu
$(document).ready(function(){
  $(".wrapper .items-container .side-left .section .dropdown").click(function(){
    $(this).toggleClass("expand").siblings().removeClass('expand');
  });
});


// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }





$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".wrapper .s-product .row").addClass("stick");
    } 
    else if ($(this).scrollTop() > 200){
      $(".wrapper .s-product .row").removeClass("stick");
    }else{
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

