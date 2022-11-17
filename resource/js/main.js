var swiper = new Swiper(".mySwiper--content1.mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop:true,
    
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
    loop:true,
    navigation: {
        nextEl: ".con2 .swiper-button-next,.con2 .swiper-button-next2",
        prevEl: ".con2 .swiper-button-prev,.con2 .swiper-button-prev2",
      },
  });

    $('.start').on('click',function(){
      swiper.autoplay.start();
      $(this).removeClass('off');
      $('.pause').removeClass('on');
    });

    $('.pause').on('click',function(){
      swiper.autoplay.stop();
      $(this).addClass('on');
      $('.start').addClass('off');
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





