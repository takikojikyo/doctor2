$(function () {

  // 下の固定メニューをスクロールしたら表示
$(window).on('scroll', function() {
  if ($(window).scrollTop() > $(window).height()) { 
      $('.fixed_menu').addClass('show'); 
  } else {
      $('.fixed_menu').removeClass('show'); 
  }
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