// 퀵버튼
$(document).ready(function() {
    var offset = 100;   // 수직으로 어느정도 움직여야 버튼이 나올까?
    var duration = 500;   // top으로 이동할때까지의 animate 시간 (밀리세컨드, default는 400. 예제의 기본은 500)
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#quick_btn').fadeIn(duration);
        } else {
            $('#quick_btn').fadeOut(duration);
        }
    });
    
    $('#quick_btn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});


// 서브 logo 

$(document).ready(function() {
    var sublogoimg = "#" + "sublogoimg";
    $(sublogoimg).attr('src');
    $(sublogoimg).attr('src','../images/header/img_beo_logo_black.png');


});


$(document).ready(function() {
    $(window).scroll(function() {
    // 100 = The point you would like to fade the nav in.
        if ($(window).scrollTop() > 100 ){
            $('.bg').addClass('show');
      } else {
        $('.bg').removeClass('show');
        };      
    });

    $('.scroll').on('click', function(e){       
            e.preventDefault()
      $('html, body').animate({
          scrollTop : $(this.hash).offset().top
        }, 1500);
    });

});

// // 모바일 ul height
// $(function() {

//     resizeH();
//     $(window).resize(function(){
//         resizeH();
//     })
//     function resizeH(){
//         var winH = $(window).height();
//         $('.header_mobile_gnb').height(winH);
//         // $('.headeR_mobile_gnb').css('padding-bottom','100px')
//     }
    
// });


// 모바일 on/off
$(function() {
    $(function(){
        $('.header_mobile_btn').on('click', function(e){
            $('.header_mobile_gnb').fadeIn('fast');
            $("body").bind('touchmove', function(e){e.preventDefault()}); //스크롤방지
            $("body").css('overflow','hidden');
        });
        $('.mobile_close').on('click', function(e){
            $('.header_mobile_gnb').fadeOut('fast');
            $("body").unbind('touchmove'); //스크롤 방지 해제
            $("body").css('overflow','scroll');
        }); 
        $(window).resize(function(){
            var resizeW = $(window).width();
            if(resizeW >= 790) {
                $('.header_mobile_gnb').fadeOut('fast');
            }
        })

    })
});
