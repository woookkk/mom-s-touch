$(function () { ///////// jQB ///////////
    //console.log("로딩완료");





    var ftop = $(".info_icon_box").offset().top;
    //////// 스크롤 이벤트 설정하기 //////////
    $(window).scroll(function () {
        //현재 window의 스크롤바 위치(세로 스크롤)
        var cTop = $(this).scrollTop();
        console.log("현재스크롤바위치: " + cTop);
        console.log(ftop);

        if (cTop > ftop - 850 && cTop < ftop - 100) {
            $(".info_icon_list").addClass("active");
        } else {

            $(".info_icon_list").removeClass("active");
        }

    }); ////////////// scroll ////////////////


    /* 모바일 스크롤 */
    if ($(window).width() < 541) {
        var ftop = $(".info_icon_box").offset().top;
        //////// 스크롤 이벤트 설정하기 //////////
        $(window).scroll(function () {
            //현재 window의 스크롤바 위치(세로 스크롤)
            var cTop = $(this).scrollTop();
            console.log("현재스크롤바위치: " + cTop);
            console.log(ftop);

            if (cTop > ftop - 850 && cTop < ftop - 100) {
                $(".info_icon_list").addClass("active");
            } else {

                $(".info_icon_list").addClass("active");
            }
        }); ////////////// scroll ////////////////
    } ///////////////// 모바일 ////////////////////////



    /********** 타이핑 효과 ********/

    var typed6 = new Typed('#typed6', {
        strings: ['고객의 욕구에 부합하는 제품과 서비스를 제공함으로써^500\n고객에게 신뢰와 사랑을 받는 서도기업으로 도약하겠습니다.'

    ],
        // 타이핑스피드
        typeSpeed: 70,
        // 지우기스피드
        backSpeed: 0,
        // 반복여부
        loop: true

    });


    if ($(window).width() < 415) {

        var typed5 = new Typed('#typed7', {
            strings: ['고객의 욕구에 부합하는 제품과 서비스를^500\n 제공함으로써 고객에게 신뢰와 사랑을 받는^500\n 서도기업으로 도약하겠습니다.'],

            // 타이핑스피드
            typeSpeed: 75,
            // 지우기스피드
            backSpeed: 0,
            // 반복여부
            loop: false
        });
    } ///////////////// 모바일 ////////////////////////

}); ///////////////// jQB /////////////////////
