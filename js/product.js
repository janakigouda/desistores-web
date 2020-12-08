// sidebar-menu
$(document).ready(function(){
  $(".wrapper .items-container .side-left .section .dropdown").click(function(){
    $(this).toggleClass("expand").siblings().removeClass('expand');
  });
});
