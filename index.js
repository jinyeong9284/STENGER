// AOS
AOS.init();

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

// experience-wrapper
gsap.set(".experience-wrapper .text-wrapper p:first-child", {
    top: 30,
    opacity:0,
  });
  
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".experience-wrapper",
        scrub: 1,
        start: "-=500",
        end: "center bottom",
      },
    })
    .to(".experience-wrapper .text-wrapper p:first-child", {
      top: 0,
      opacity:1,
      duration: 1,
      ease: "none",
      stagger: 1,
      transition: 0.3,
    });

gsap.set(".experience-wrapper .text-wrapper p:nth-child(2)", {
    top: 30,
    opacity:0,
    });
      
    gsap
     .timeline({
      scrollTrigger: {
      trigger: ".experience-wrapper",
      scrub: 3,
      start: "-=300",
      end: "center bottom",
    },
    })
     .to(".experience-wrapper .text-wrapper p:nth-child(2)", {
      top: 0,
      opacity:1,
      duration: 1,
      ease: "none",
      transition: 0.1,
    });

gsap.set(".experience-wrapper .text-wrapper p:nth-child(3)", {
    top: 30,
    opacity:0,
    });
          
    gsap
     .timeline({
        scrollTrigger: {
        trigger: ".experience-wrapper",
        scrub: 3,
        start: "-=100",
        end: "center bottom",
        },
        })
     .to(".experience-wrapper .text-wrapper p:nth-child(3)", {
        top: 0,
        opacity:1,
        duration: 1,
        ease: "none",
        transition: 0.1,
        });

gsap.set(".experience-wrapper .text-wrapper2 ul li", {
    opacity:0,
    width:"50%",
    });
          
    gsap
     .timeline({
        scrollTrigger: {
        trigger: ".experience-wrapper",
        scrub: 3,
        start: "center center",
        end: "center bottom",
        },
        })
     .to(".experience-wrapper .text-wrapper2 ul li", {
        opacity:1,
        width:"100%",
        duration: 1,
        ease: "none",
        transition: 0.1,
        });

gsap.set(".experience-wrapper .text-wrapper2 ul li span", {
    opacity:0,
    top:20,
    });
          
    gsap
     .timeline({
        scrollTrigger: {
        trigger: ".experience-wrapper",
        scrub: 3,
        start: "center center",
        end: "center bottom",
        },
        })
     .to(".experience-wrapper .text-wrapper2 ul li span", {
        opacity:1,
        top:0,
        duration: 1,
        ease: "none",
        transition: 0.1,
        });

// find-wrapper
gsap.set(".find-wrapper .h3:nth-of-type(1)", {
    opacity:0,
    top:100
    });
          
    gsap
     .timeline({
        scrollTrigger: {
        trigger: ".find-wrapper",
        scrub: 1,
        start: "-=1000",
        end: "center bottom",
        },
        })
     .to(".find-wrapper .h3:nth-of-type(1)", {
        opacity:1,
        top:0,
        duration: 0.5,
        ease: "none",
        transition: 0.1,
        });

gsap.set(".find-wrapper .h3:nth-of-type(2)", {
    opacity:0,
    top:"30%"
    });
          
    gsap
     .timeline({
        scrollTrigger: {
        trigger: ".find-wrapper",
        scrub: 1,
        start: "-=1000",
        end: "center bottom",
        },
        })
     .to(".find-wrapper .h3:nth-of-type(2)", {
        opacity:1,
        top:"14%",
        duration: 0.5,
        ease: "none",
        transition: 0.1,
        });

gsap.set(".find-wrapper .h3:nth-of-type(3)", {
    opacity:0,
    top:"50%"
    });
          
    gsap
     .timeline({
        scrollTrigger: {
        trigger: ".find-wrapper",
        scrub: 1,
        start: "-=1000",
        end: "center bottom",
        },
        })
     .to(".find-wrapper .h3:nth-of-type(3)", {
        opacity:1,
        top:"30%",
        duration: 0.5,
        ease: "none",
        transition: 0.1,
        });