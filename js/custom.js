// $(document).ready(function(){
//   $('[data-toggle="tooltip"]').tooltip()
// });

// function goBack() {
//   window.history.back();
// }
 // AOS Instance //
//  AOS.init();

// $(document).ready(function () {
//   var Size = $(window).width();

// //   while (Size <= 768) {
// //     var maxLength = 300;
// //     $(".show-read-more").each(function () {
// //       var myStr = $(this).text();
// //       if ($.trim(myStr).length > maxLength) {
// //         var newStr = myStr.substring(0, maxLength);
// //         var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
// //         $(this).empty().html(newStr);
// //         $(this).append("<br/>");
// //         $(this).append(
// //           '<a href="javascript:void(0);" class="read-more">Read More</a>'
// //         );
// //         $(this).append('<span class="more-text">' + removedStr + "</span>");
// //       }
// //     });
// //     $(".read-more").click(function () {
// //       $(this).siblings(".more-text").contents().unwrap();
// //       $(this).remove();
// //     });
// //   }

//   $(window).scroll(function () {
//     if ($(document).scrollTop() >= 50) {
//       $(".header-menu").addClass("navbar-fixed");
//     } else {
//       $(".header-menu").removeClass("navbar-fixed");
//     }
//   });

//   // Check Width
// //   function checkWidth() {
// //     var windowSize = $(window).width();
// //     if (windowSize <= 768) {
// //       var maxLength = 300;
// //       $(".show-read-more").each(function () {
// //         var myStr = $(this).text();
// //         if ($.trim(myStr).length > maxLength) {
// //           var newStr = myStr.substring(0, maxLength);
// //           var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
// //           $(this).empty().html(newStr);
// //           $(this).append("<br/>");
// //           $(this).append(
// //             '<a href="javascript:void(0);" class="read-more">Read More</a>'
// //           );
// //           $(this).append('<span class="more-text">' + removedStr + "</span>");
// //         }
// //       });
// //       $(".read-more").click(function () {
// //         $(this).siblings(".more-text").contents().unwrap();
// //         $(this).remove();
// //       });
// //     }
// //   }
//   // open
//   $(".open").click(function () {
//     $(".open").css("display", "none");
//     $(".close").css("display", "block");
//     $(".toggle-logo").css("color", "transparent");
//     $(".toggle-logo").bind("click", false);
//   });

//   $(".close").click(function () {
//     $(".open").css("display", "block");
//     $(".close").css("display", "none");
//     $(".toggle-logo").css("color", "#c94f9b");
//     $(".toggle-logo").unbind("click", false);
//   });
//   //close

//   // Check Width
// //   checkWidth();
//   activePageLinkControl();
// });

// function activePageLinkControl() {
//   $(".pagination .page-item a").click(function () {
//     $(".page-item").removeClass("active");
//     $(this).closest(".page-item").addClass("active");
//   });
// }

// function goBack() {
//   window.history.back();
// }

// // number or not check//
// function isNumberKey(evt) {
//   var charCode = evt.which ? evt.which : evt.keyCode;
//   if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
//     return false;

//   return true;
// }
// // number or not check//

// const prevIcon = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
// const nextIcon = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';


// $('.top-owl').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     dots:false,
//     navText:[
//         prevIcon,
//         nextIcon
//     ],
//     responsive: {
//         0: {
//             items: 1
//         },
//         260: {
//             items: 2
//         },
//         380: {
//             items: 2
//         },
//         768: {
//             items: 5
//         },
//         992: {
//             items: 6
//         },
//         1300: {
//             items: 7
//         }
//     }
// })

// $('.searchbtn').click(function(){
//     // $('.search-wrapper').css({
//     //     bottom: "-20px"
//     // });
//     $(".search-wrapper").toggleClass("bottom");
// });
// $('.msearchicon').click(function(){
//   $(".mobile-search-wrapper").toggleClass("bottom");
// });

// $(document).ready(function () {
//     $("#sidebarCollapse").on("click", function () {
//       // $("#sidebar").toggleClass("active");
//       if ($("#sidebar").css("left") == "-250px") {
//         $("#sidebar").css({ left: "0px" });
//       } else {
//         $("#sidebar").css({ left: "-250px" });
//       }
//     });
//   });
//   $(document).click(function(e){
//   var container = $("#sidebar");
//   // If the target of the click isn't the container
//   if(!$("#sidebar").is(e.target) && $("#sidebar").has(e.target).length === 0){
//     if ($("#sidebar").css("left") == "0px") {
//         $("#sidebar").css({ left: "-250px" });
//       }
//   }
//   });


// $(document).ready(function(){
//     //Event for pushed the video
//     $('.carousel').carousel({
//         pause: true,
//         interval: false
//     });
// });


var prevIcon = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
var nextIcon = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';

$('.brand-owl').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    dots:false,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1
        },
        260: {
            items: 1
        },
        380: {
            items: 1
        },
        500: {
            items: 2
        },
        600: {
            items: 2
        },
        700: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 3
        },
        1100: {
            items: 4
        },
        1200: {
            items: 4
        },
        1300: {
            items: 4
        }
    }
})

// Serve Owl 
$('.Serve-owl').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    slideBy: 1,
    nav:true,
    dots:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 2
        },
        260: {
            items: 2
        },
        300: {
            items: 2
        },
        400: {
            items: 3
        },
        500: {
            items: 3
        },
        600: {
            items: 3
        },
        700: {
            items: 4
        },
        767: {
            items: 4
        },
        768: {
            items: 2
        },
        800: {
            items: 2
        },
        900: {
            items: 2
        },
        991: {
            items: 2
        },
        992: {
            items: 3
        },
        1300: {
            items: 4
        }
    }
})
// Serve Owl 

// Supply Owl 
$('.supply-owl').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:5,
    slideBy: 1,
    nav:true,
    dots:false,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1
        },
        260: {
            items: 1
        },
        380: {
            items: 1
        },
        400: {
            items: 2
        },
        500: {
            items: 3
        },
        600: {
            items: 3
        },
        700: {
            items: 3
        },
        768: {
            items: 3
        },
        800: {
            items: 3
        },
        900: {
            items: 4
        },
        992: {
            items: 4
        },
        1000: {
            items: 4
        },
        1100: {
            items: 4
        },
        1200: {
            items: 5
        },
        1300: {
            items: 5
        }
    }
})
// Supply Owl 




// Header Sticky 
// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 1) {
//         $(".header").addClass("sticky");
//     } else {
//         $(".header").removeClass("sticky");
//     }
// });
// Header Sticky 


// Mobile Bar 
$(document).ready(function(){
    $('.micon').click(function(){
        console.log("click");
    if ($("#sidebar").css("left") == "-250px") {
        $("#sidebar").css({ left: "0px" });
        } else {
        $("#sidebar").css({ left: "-250px" });
        }
    });
});


$(document).click(function(e){
    var container = $("#sidebar");
    // If the target of the click isn't the container
    if(!$("#sidebar").is(e.target) && $("#sidebar").has(e.target).length === 0){
      if ($("#sidebar").css("left") == "0px") {
          $("#sidebar").css({ left: "-250px" });
        }
    }
    });
// Mobile Bar 