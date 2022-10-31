$(document).ready(function () {

    let floating_top = parseInt($(".floating").css("top"));


    $(".nav ul li").eq(1).addClass("on")
    $(".indicator ul li").eq(0).addClass("on")


    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        let current = (pos / ($(document).outerHeight()- $(window).height()))*100;

        $(".bar").width(current+"%")
        $(".floating").stop().animate({
            top : floating_top + pos
        })
        if(pos >= 150){
            $(".nav").addClass("on")
        }else{
            $(".nav").removeClass("on")
        }

        if(pos >= 1080){
            $(".aside").fadeIn();
        }else{
            $(".aside").fadeOut();
        }

        let new_pos = Math.floor(pos / $(".section").height());

        $(".nav ul li").removeClass("on").eq(new_pos).addClass("on")
        $(".indicator ul li").removeClass("on").eq(new_pos).addClass("on")


    })
    $(".aside").click(function (){ 
        $("html,body").stop().animate({
            scrollTop : 0
        })
    })
    $(".nav ul li, .indicator ul li, .floating ul li").click(function (e) { 
        let i = $(this).index();
        event.preventDefault()

        $("html, body").stop().animate({
            scrollTop: $(".section").eq(i).offset().top
        })
    });
});