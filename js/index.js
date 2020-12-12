// scroll
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
        $(".wrapper .header .header-up").addClass("test");
      } else {
        $(".wrapper .header .header-up").removeClass("test");
      }
    });
  });


  //  toggle sidebar open
  function myFunction() {
    var x = document.getElementById("down-header");
    if (x.className === "header-down") {
        x.className += " responsive";
    } else {
        x.className = "header-down";
    }
}
// toggle close
function removeFun() {
  var element = document.getElementById("down-header");
  element.classList.remove("responsive");
}


// function closeNav() {
//     var a = document.getElementById("down-header");
//     if (a.className === "header-down") {
//         a.className.removeClass(" responsive");
//     } else {
//         a.className = "header-down";
//     }
//   }

