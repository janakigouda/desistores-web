// sidebar-menu
$(document).ready(function () {
  $(".wrapper .items-container .side-left .section .dropdown").click(function () {
    $(this).toggleClass("expand").siblings().removeClass('expand');
  });
});

$(document).ready(function () {
  $(".wrapper .items-container .block-up-1 .block-head .sort").click(function () {
    $(this).toggleClass("display").siblings().removeClass('display');
  });
});

$(document).ready(function () {
  $(".wrapper .items-container .side-left").click(function () {
    $(this).toggleClass("view").siblings().removeClass('view');
  });
});

// cart desktop

$(document).ready(function () {
  $(".wrapper .main-body .section1 .cart .cart-up .c-address .c-address1 .c-add").click(function () {
    $(this).toggleClass("view").siblings().removeClass('view');
  });
});


// cart mobile
$(document).ready(function () {
  $(".wrapper .main-body .mobile-view .section-1 .cart .cart-middle .dis-022 .dis-022-up .price .price2").click(function () {
    $(this).toggleClass("view1").siblings().removeClass('view1');
  });
});

$(document).ready(function () {
  $(".wrapper .main-body .mobile-view .section-1 .cart .cart-middle .dis-022 .dis-022-up .price .price2 .price22 .myselect .more").click(function () {
    $(".wrapper .main-body .mobile-view .section-1 .cart .cart-middle .dis-022 .dis-022-up .price .price2").addClass('view12');
  });
  $(".btn-cancel").click(function () {
    $(".wrapper .main-body .mobile-view .section-1 .cart .cart-middle .dis-022 .dis-022-up .price .price2").removeClass('view12');
  });
  $(".btn-apply").click(function () {
    $(".wrapper .main-body .mobile-view .section-1 .cart .cart-middle .dis-022 .dis-022-up .price .price2").removeClass('view12');
  });
})

var buttons = document.getElementsByClassName('button');
for (var i = 0; i < buttons.length; i++) {
  (function (index) {
    buttons[index].onclick = function () {
      var x = buttons[index].innerHTML;
      document.getElementById("num").innerHTML = x;
    };
  })(i)
}

function applyFun() {
  var x = document.getElementById("quantity");
  var currentVal = x.value;
    document.getElementById("num").innerHTML =currentVal;

  }






// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 50) {
//       $(".wrapper .s-product .row").addClass("stick");
//     } 
//     else if ($(this).scrollTop() > 200){
//       $(".wrapper .s-product .row").removeClass("stick");
//     }else{
//       $(".wrapper .s-product .row").removeClass("stick");
//     }
//   });
// });

// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(this).scrollTop() >= 500) {
//       $(".wrapper .s-product").addClass("abc");
//     } else {
//       $(".wrapper .s-product").removeClass("abc");
//     }
//   });
// });

