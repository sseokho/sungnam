var swiper = new Swiper(".mySwiper--content1.mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".con1 .swiper-button-next,.con1 .swiper-button-next2",
    prevEl: ".con1 .swiper-button-prev,.con1 .swiper-button-prev2",
  },
});

var swiper2 = new Swiper(".mySwiper--content2.mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".con2 .swiper-button-next,.con2 .swiper-button-next2",
    prevEl: ".con2 .swiper-button-prev,.con2 .swiper-button-prev2",
  },
});

var swiper3 = new Swiper(".mySwiper--content3.mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".popup-footer .swiper-button-next",
    prevEl: ".popup-footer .swiper-button-prev",
  },
});

$(".con1 .control-btn.play").on("click", function () {
  swiper2.autoplay.start();
  $(this).removeClass("off");
  $(".control-btn.pause").removeClass("on");
});
$(".con1 .control-btn.pause").on("click", function () {
  swiper2.autoplay.stop();
  $(this).addClass("on");
  $(".control-btn.play").addClass("off");
});

$(".con2 .control-btn.play").on("click", function () {
  swiper.autoplay.start();
  $(this).removeClass("off");
  $(".control-btn.pause").removeClass("on");
});
$(".con2 .control-btn.pause").on("click", function () {
  swiper.autoplay.stop();
  $(this).addClass("on");
  $(".control-btn.play").addClass("off");
});

$(".mySwiper--content1 .state_link").hover(
  function () {
    let idx = $(".mySwiper--content1 .slide-content .state_link").index(this);
    $(".mySwiper--content1 .slide-content").eq(idx).addClass("is-active");
  },
  function () {
    $(".mySwiper--content1 .slide-content").removeClass("is-active");
  }
);

$(".mySwiper--content2 .state_link").hover(
  function () {
    let idx = $(".mySwiper--content2 .slide-content .state_link").index(this);
    $(".mySwiper--content2 .slide-content").eq(idx).addClass("is-active");
  },
  function () {
    $(".mySwiper--content2 .slide-content").removeClass("is-active");
  }
);

$(".layer-popup").addClass("display--none");
$(".multi-popup").addClass("display--none");
$(".multi-popup2").addClass("display--none");
$(".layer-popup").addClass("display--none");
$(".iframe-popup").addClass("display--none");
$(".year-popup").addClass("display--none");

$(".more-btn").on("click", function () {
  $(".layer-popup").show();
  $(".year-popup").removeClass("display--none");
});

$(".layer-popup").on("click", function () {
  $(".layer-popup").hide();
  $(".year-popup").addClass("display--none");
});

$(".state_link").on("click", function () {
  $(".layer-popup").show();
  $(".iframe-popup").removeClass("display--none");
});

$(".layer-popup").on("click", function () {
  $(".layer-popup").hide();
  $(".iframe-popup").addClass("display--none");
});

$(".layout-picture").on("click", function () {
  $(".layer-popup").show();
  $(".multi-popup").removeClass("display--none");
});

$(".close-btn").on("click", function () {
  $(".layer-popup").hide();
  $(".multi-popup").addClass("display--none");
});

$(".header_wrap").on("click", function () {
  alert("ff");
  $(".layer-popup").show();
  $(".multi-popup2").removeClass("display--none");
});

$(".close-btn").on("click", function () {
  $(".layer-popup").hide();
  $(".multi-popup2").addClass("display--none");
});
