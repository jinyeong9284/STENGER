// header event
const elem = document.documentElement;
$(window).on("scroll", () => {
  /* console.log('scrollTop',elem.scrollTop);
    console.log('pageYOffset',pageYOffset);
    console.log('scrollY',scrollY); */

  if (scrollY > 50) {
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }
});

// out product event
$(document).ready(function(){
    $(".img1-1").hover(
        function(){ //mouseover시에
            $(".img1").css("transition","0.5s"),
            $(".img1-2").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-3").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-4").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)")
        },
        function(){ //mouseout시에 
            $(".img1").css("transition","0.5s"),
            $(".img1-2").css("filter","none"),
            $(".img1-3").css("filter","none"),
            $(".img1-4").css("filter","none")
        }
    )
})
$(document).ready(function(){
    $(".img1-2").hover(
        function(){ //mouseover시에
            $(".img1").css("transition","0.5s"),
            $(".img1-1").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-3").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-4").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)")
        },
        function(){ //mouseout시에 
            $(".img1").css("transition","0.5s"),
            $(".img1-1").css("filter","none"),
            $(".img1-3").css("filter","none"),
            $(".img1-4").css("filter","none")
        }
    )
})
$(document).ready(function(){
    $(".img1-3").hover(
        function(){ //mouseover시에
            $(".img1").css("transition","0.5s"),
            $(".img1-2").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-1").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-4").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)")
        },
        function(){ //mouseout시에 
            $(".img1").css("transition","0.5s"),
            $(".img1-2").css("filter","none"),
            $(".img1-1").css("filter","none"),
            $(".img1-4").css("filter","none")
        }
    )
})
$(document).ready(function(){
    $(".img1-4").hover(
        function(){ //mouseover시에
            $(".img1").css("transition","0.5s"),
            $(".img1-2").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-3").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)"),
            $(".img1-1").css("filter","brightness(0.6) contrast(1.2) grayscale(0.2)")
        },
        function(){ //mouseout시에 
            $(".img1").css("transition","0.5s"),
            $(".img1-2").css("filter","none"),
            $(".img1-3").css("filter","none"),
            $(".img1-1").css("filter","none")
        }
    )
})

// bestsellers

// $.ajax({
//     url: "./DB/bgData.json",
//     dataType: "json",
//     success: (products) => {
//         if (products) {
//             $.each(products, (idx, product) => {
//                 const dataList = `
//                 `;
//                 $('.sale-wrapper li').eq(idx).append(dataList);
//             });
//         }
//     },
//     error: (xhr, status, error) => {
//         console.log('AJAX 요청 실패:', xhr, status, error);
//     }
// });
