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

// bestsellers swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// bestsellers button
$(document).ready(function() {
    $('.button-sale').click(function() {
      $('.sale-wrapper').css({"display":"flex"});
      $('.new-wrapper').css({"display":"none"});
      $('.in-wrapper').css({"display":"none"});
      $('.button-new').removeClass("on");
      $('.button-in').removeClass("on");
      $('.button-sale').addClass("on");
    });
  });
$(document).ready(function() {
    $('.button-new').click(function() {
      $('.new-wrapper').css({"display":"flex"});
      $('.sale-wrapper').css({"display":"none"});
      $('.in-wrapper').css({"display":"none"});
      $('.button-sale').removeClass("on");
      $('.button-in').removeClass("on");
      $('.button-new').addClass("on");
    });
  });
  $(document).ready(function() {
    $('.button-in').click(function() {
      $('.in-wrapper').css({"display":"flex"});
      $('.sale-wrapper').css({"display":"none"});
      $('.new-wrapper').css({"display":"none"});
      $('.button-sale').removeClass("on");
      $('.button-new').removeClass("on");
      $('.button-in').addClass("on");
    });
  });

// bestsellers sale
$.ajax({
    url: "./DB/bgData.json",
    dataType: "json",
    success: (products) => {
        if (products) {
            $.each(products, (idx, product) => {
                const dataList = `
                <div class="data-flex">
                <p class="name">${product.name}</p>
                <p class="price">${product.price}</p>
                </div>
                <div class="data-flex">
                <p class="quality">${product.quality}</p>
                <p class="bprice">${product.bprice}</p>
                </div>
                <img src="${product.url}" alt"${product.id}">
                <div>
                <p class="con">${product.con}</p>
                </div>
                <div class="product-flex">
                <div>
                <p class="view">${product.view}</p>
                </div>
                <div>
                <p class="compare">${product.compare}</p>
                </div></div>
                `;
                $('.sale-wrapper li').eq(idx).append(dataList);
            });
        }
    },
    error: (xhr, status, error) => {
        console.log('AJAX 요청 실패:', xhr, status, error);
    }
});

// bestsellers new
$.ajax({
    url: "./DB/newData.json",
    dataType: "json",
    success: (products) => {
        if (products) {
            $.each(products, (idx, product) => {
                const dataList = `
                <div class="data-flex">
                <p class="name">${product.name}</p>
                <p class="price">${product.price}</p>
                </div>
                <div class="data-flex">
                <p class="quality">${product.quality}</p>
                <p class="bprice">${product.bprice}</p>
                </div>
                <img src="${product.url}" alt"${product.id}">
                <div>
                <p class="con">${product.con}</p>
                </div>
                <div class="product-flex">
                <div>
                <p class="view">${product.view}</p>
                </div>
                <div>
                <p class="compare">${product.compare}</p>
                </div></div>
                `;
                $('.new-wrapper li').eq(idx).append(dataList);
            });
        }
    },
    error: (xhr, status, error) => {
        console.log('AJAX 요청 실패:', xhr, status, error);
    }
});

// bestsellers in
$.ajax({
    url: "./DB/inData.json",
    dataType: "json",
    success: (products) => {
        if (products) {
            $.each(products, (idx, product) => {
                const dataList = `
                <div class="data-flex">
                <p class="name">${product.name}</p>
                <p class="price">${product.price}</p>
                </div>
                <div class="data-flex">
                <p class="quality">${product.quality}</p>
                <p class="bprice">${product.bprice}</p>
                </div>
                <img src="${product.url}" alt"${product.id}">
                <div>
                <p class="con">${product.con}</p>
                </div>
                <div class="product-flex">
                <div>
                <p class="view">${product.view}</p>
                </div>
                <div>
                <p class="compare">${product.compare}</p>
                </div></div>
                `;
                $('.in-wrapper li').eq(idx).append(dataList);
            });
        }
    },
    error: (xhr, status, error) => {
        console.log('AJAX 요청 실패:', xhr, status, error);
    }
});