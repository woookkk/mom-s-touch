$(function () { ////////////// jQB /////////////////////
    console.log("로딩완료!");

    //부드러운 스크롤 
    //$("#franchisee_wrap").smoothWheel();

    /* 스크롤 */
    AOS.init();


    /* 패럴렉스 */
    $(".sec1_img_back").enllax({

    });

    // 1.현재 페이지번호
    var pno = 0;

    // 2.스크롤액션 기준위치
    var p1pos, p2pos, p3pos, p4pos;
    // 3.기준선 범위 갭
    var gap = 200;
    // 4.메뉴를 클릭할 경우 상태변수
    var click_sts = 0; //0-클릭안함,1-클릭함


    $(window).scroll(function (e) {

        // 탑버튼위치값(top:70%)
        var tbpos = $(window).height() * 0.8;
        //console.log("70%값:" + tbpos);

        // 현재 스크롤 위치값(세로스크롤)
        var scTop = $(this).scrollTop();
        //console.log("위치:" + scTop);

        // 1.스크롤위치가 200px 미만일때
        if (scTop < 200) {

            // 버튼숨기고 처음위치로
            $(".topbtn").hide().css({
                top: tbpos + "px"
            }); /// css ///////

        } //// if ////////////////////
        // 2.스크롤위치가 200px 이상일때
        else {

            // 버튼보이고 위치이동하기
            $(".topbtn").show().stop()
                .animate({
                    top: (tbpos + scTop) + "px"
                }, 400, "easeOutCirc");

        } //// else //////////////////



    }); //////////////// scroll //////////////////////////////////////////////




    /// 스크롤액션 기준요소 top값 셋팅
    // offset().top 으로 각 요소의 top값 읽어오기
    p1pos = $("#page1").offset().top;
    p2pos = $("#page2").offset().top;
    p3pos = $("#page3").offset().top;
    p4pos = $("#page4").offset().top;

    console.log("위치:" + p1pos + "/" + p2pos + "/" + p3pos + "/" + p4pos);





    /// 페이지 새로 고칠때 맨위로 가게하기(브라우저 캐쉬가 잘 안지워져서 쓰는 것임!) 
    setTimeout(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 10); /// animate ////
    }, 500); //// 타임아웃 ////////




    // GNB a링크를 클릭하면 해당 페이지위치로 이동 애니메이션
    // 이벤트 대상 : .franchisee_menu_list a
    $(".franchisee_menu_list a").click(function (e) {
        e.preventDefault();

        // 스크롤 이벤트막기 상태값 변경!
        click_sts = 1;

        // 클릭된 a요소의 부모li순번을 pno에 넣기!
        var idx = $(this).parent().index();
        pno = idx;
        console.log("메뉴순번:" + idx);

        var pid = $(this).attr("href");

        // 2. 이동할 위치의 아이디 top값을 구함
        var pgpos = $(pid).offset().top;

        // 3. 스크롤에 애니메이션을 설정하여 해당위치로 이동
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 800, "easeInOutQuint", function () {
            //이동후 클릭상태값 해제하기
            click_sts = 0;
        }); /// animate //////


    }); //////// click /////////////
    ////////////////////////////////


    ////////// 메뉴 이동 리스트 !! ////////
    $(".franchisee_menu_list li").click(function () {
        $(this).addClass("franchisee_click")
            .css({
                borderBottom: "none"
            })
            .siblings()
            .removeClass("franchisee_click")
            .css({
                borderBottom: "2px solid #C7060E"
            })

    }); ///////////// click ///////////////////



    /// 탑버튼 클릭시 맨위로 이동하기 ////
    $(".topbtn").click(function () {
        click_sts = 1; //스크롤잠금
        $("html,body").animate({
            scrollTop: "0px"
        }, 800, "easeInOutQuint", function () {
            click_sts = 0; //해제   
        }); /// animate /////

    }); ////////// click ///////////







    var stepT = [
        "가맹점 문의상담",
        "입지조사 및 상권분석",
        "점포선정",
        "점포계약 & 가맹계약",
        "점포공사 및 사설",
        "교육 및 점검",
        "개업준비",
        "오픈 OPEN"
    ]

    var stepLf = [
        "- 홈페이지 접수 및 전화",
        "- 사업타당성 검토(정보제공)",
        "- 입지조사, 주변상권분석,유동인구조사",
        "- 임대차계약",
        "- 인테리어 시공 및 설비",
        "- 체계화된 MANUAL 교육(제조)",
        "- 오픈점검 인원3일 지원",
        "- 지속적인 경영 지도 및 관리"
    ]
    var stepLs = [
        "&nbsp;",
        "- 점포의 유무에 따른 형태별 접근",
        "- 예상투자비(임대료,공사비용) 산정",
        "- 가맹점계약",
        "- 공사기간(약 25일)",
        "- 매장 운영교육(인원, 운영)",
        "- 영업지도, 장비 테스트",
        "- 3개월 매장 매출 안정화 프로그램 진행"
    ]
    var stepLt = [
        "&nbsp;",
        "- 희망지역 및 투자규모에 맞는 점포 조사",
        "&nbsp;",
        "&nbsp;",
        "- 감리 시행",
        "- 점포 인허가 사항 준비",
        "- 오픈판촉 지도",
        "&nbsp;"
    ]




    /// 1. 메뉴박스에 html생성 및 초기화, 캡션글 넣기
    // 대상 : .step_list_wrap
    for (var i = 0; i < 4; i++) {
        $(".step_list_wrap1").append(
            '<ul class="step_list_box">' +
            '<li class="step_list_img">' +
            '<div class="step_img">' +
            '<img src="images/step' + (i + 1) + '.png" alt="개설절차">' +
            '<div class="step_list_num">STEP' + (i + 1) + '</div>' +
            '</div>' +
            '</li>' +
            '<li class="step_list_text">' +
            '<ul class="step_list_text_area">' +
            '<li class="step_text_title">' + stepT[i] + '</li>' +
            '<li>' + stepLf[i] + '</li>' +
            '<li>' + stepLs[i] + '</li>' +
            '<li>' + stepLt[i] + '</li>' +
            '</ul>' +
            '</li>' +
            '</ul>'

        );

    } //////////// for ////////////

    for (var i = 4; i < 8; i++) {
        $(".step_list_wrap2").append(
            '<ul class="step_list_box">' +
            '<li class="step_list_img">' +
            '<div class="step_img">' +
            '<img src="images/step' + (i + 1) + '.png" alt="개설절차">' +
            '<div class="step_list_num">STEP' + (i + 1) + '</div>' +
            '</div>' +
            '</li>' +
            '<li class="step_list_text">' +
            '<ul class="step_list_text_area">' +
            '<li class="step_text_title">' + stepT[i] + '</li>' +
            '<li>' + stepLf[i] + '</li>' +
            '<li>' + stepLs[i] + '</li>' +
            '<li>' + stepLt[i] + '</li>' +
            '</ul>' +
            '</li>' +
            '</ul>'

        );

    } //////////// for ////////////

    /* 모바일 */

    if ($(window).width() < 590) {
        $(".franchisee_menu_list li")
            .click(function () {
                $(this).removeClass("franchisee_click").css({
                        borderBottom: "none"
                    })
                    .siblings().css({
                        borderBottom: "none"
                    })
            });
    };
    /*

        
       if ($(window).width() < 608){
          $('.success_area_2_area li').eq(0).attr("data-enllax-ratio","1").attr("data-enllax-type","background");
        };
    */


}); //////////////////// jQB /////////////////////////
/////////////////////////////////////////////////////
