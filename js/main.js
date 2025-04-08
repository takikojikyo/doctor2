$(function () {

  // 下の固定メニューをスクロールしたら表示
$(window).on('scroll', function() {
  if ($(window).scrollTop() > $(window).height()) { 
      $('.fixed_menu').addClass('show'); 
  } else {
      $('.fixed_menu').removeClass('show'); 
  }
});



function sliderSetting(){
  if(window.innerWidth <= 960){
    if(!$('.slick-box').hasClass('slick-initialized')){
      $('.slick-box').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              centerPadding: '0%'
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              centerPadding: '50px'
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              centerPadding: '0%'
            }
          }
        ]
      });
    }
  } else {
    if($('.slick-box').hasClass('slick-initialized')){
      $('.slick-box').slick('unslick'); // スライダー解除
    }
  }
}

$(window).on('load resize', function(){
  sliderSetting();
});



// スクロール時のイベント
$(window).scroll(function () {


  $(".fadein").each(function () {

    let scroll = $(window).scrollTop();

    let target = $(this).offset().top;

    let windowHeight = $(window).height();

    if (scroll > target - windowHeight + 200) {

      
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });

});
});