var swiper = new Swiper(".mySwiper--content1.mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,

    navigation: {
        nextEl: ".con1 .swiper-button-next",
        prevEl: ".con1 .swiper-button-prev",
      },
  });

  var swiper2 = new Swiper(".mySwiper--content2.mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,

    navigation: {
        nextEl: ".con2 .swiper-button-next",
        prevEl: ".con2 .swiper-button-prev",
      },
  });

  

    
    $(".mySwiper--content1 .state_link").hover(
        
        function(){   
            
          let idx = $(".mySwiper--content1 .slide-content .state_link").index(this);
            $(".mySwiper--content1 .slide-content").eq(idx).addClass("is-active");
            
        },
        function(){
            $(".mySwiper--content1 .slide-content").removeClass("is-active");
        }

        
    );

    $(".mySwiper--content2 .state_link").hover(
        
      function(){   
          
        let idx = $(".mySwiper--content2 .slide-content .state_link").index(this);
          $(".mySwiper--content2 .slide-content").eq(idx).addClass("is-active");
          
      },
      function(){
          $(".mySwiper--content2 .slide-content").removeClass("is-active");
      }

      
  );





