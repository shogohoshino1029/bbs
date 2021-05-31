// 読み込んだらフェードアウト
$(window).on('load', function () {
    // 消えるタイミング
    $('.loading').delay(1500).fadeOut(300);
});
// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
    $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);

$(function(){
    $('nav').hide();
    $('.menu-trigger').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('nav').fadeOut('open');
            $('.overlay').removeClass('open');
        } else {
            $(this).addClass('active');
            $('nav').fadeIn('open');
            $('.overlay').addClass('open');
        }
    });
    $('.nav-wrap nav ul li a').on('click',function(){
        if($('.menu-trigger').hasClass('active')){
            $('.menu-trigger').removeClass('active');
            $('nav').fadeOut('open');
            $('.overlay').removeClass('open');
        } else {
            $('.menu-trigger').addClass('active');
            $('nav').fadeIn('open');
            $('.overlay').addClass('open');
        }
    });
    $('.h-left a').on('click',function(){
        if($('.menu-trigger').hasClass('active')){
            $('.menu-trigger').removeClass('active');
            $('nav').fadeOut('open');
            $('.overlay').removeClass('open');
        }});
});

$(window).on('scroll', function(){
    var h = $('header').height();
    var top = $(window).scrollTop();

    if (h < top) {
        $('header').addClass('display');

    } else {
        $('header').removeClass('display');
    }
});

$(function(){
    var headerHeight=60;
    $('a[href^="#"]').click(function() {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHeight;
        $('body,html').animate({scrollTop:position}, 1000, 'swing');
        return false;
    });
});

$(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
    });
});