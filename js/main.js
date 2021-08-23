$(function(){
     new Swiper('.clients__container', {
        loop: true,
        slidesPerView: 1.1,
        pagination: {
          el: '.clients__pagination',
          clickable: true,
        },
      });
});