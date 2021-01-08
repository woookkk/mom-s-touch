$(function () { ////////////// jQB /////////////////////
    console.log("로딩완료!");

    $(".hammenu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");

    }); ///////////// click ///////////


    //////// 햄버거 메뉴 클릭 시 숨겨진 메뉴 animate//////
     $(".hammenu").click(function () {
         if ($(".hammenu").hasClass("on")) {
             $(this).removeClass("on");
             $(".outer_menu").fadeOut(700);
             $(".mq_gnb_wrap").animate({
                 "right": "-100%"
             }, 800);
         } else {
             $(this).addClass("on");
             $(".outer_menu").fadeIn(500);
             $(".mq_gnb_wrap").animate({
                 "right": "0"
             }, 800);
         }
     }); ////////////// click /////////

     $(".mq_gnb_wrap > div ul li").click(function () {
         $(".hammenu").removeClass("on");
         $(".outer_menu").fadeOut(700);
         $(".mq_gnb_wrap").animate({
             "right": "-100%"
         }, 800);
     });///////////// click //////

    /* 햄버거 gnb 박스 */
    
     $(".mq_gnb_box li").mouseover(function () {
        $(this).css({
                transform: "translateX(-1vw)"
            })
            .siblings().find("a").css({
                opacity: ".5"
            });
    });//////////// mouseover //////////////////
    $(".mq_gnb_box li").mouseout(function () {
        $(this).css({
                transform: "translateX(0)"
            })
            .siblings().find("a").css({
                opacity: "1"
            });
    });/////////////////mouseout /////////////
    
    /* 탑버튼 */
    $(".topbtn_D").click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 800); /////////// animate ///////////////

    }); ///////////// click ///////////////////


}); //////////////////// jQB /////////////////////////
/////////////////////////////////////////////////////
