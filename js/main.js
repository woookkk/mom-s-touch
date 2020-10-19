$(function () { //////// jQB////////
    console.log("로딩완료!")

    // 배너 이미지 이동 대상: 배너박스(.main_banslide)
    var tg = $(".main_banslide");

    /*///////////////////////////////////////
        함수명: goSlide
        기능 : 슬라이드 방향별 이동 
    */ ///////////////////////////////////////

    // 광클금지 변수
    var sprot = 0; //0-허용,1-금지
    // 슬라이드 순번 변수
    var sno = 0;
    //슬라이드 개수 변수
    var scnt = tg.find("li").length;
    console.log("슬개수:" + scnt);
    //////////////////////////////////////////
    var goSlide = function (seq, dir) {


        //// seq-순번, dir-방향(0-왼쪽,1-오른쪽)
        console.log("이동방향" + dir);

        // 오른쪽 전달값이 1이므로 true
        if (dir === 1) {

            //슬라이드 순번 증가
            sno++;
            if (sno === scnt) sno = 0; //한계수(처음으로)
            
        } /////////if ///////////////
        // 왼쪽 전달값이 0 이므로 false (else로 처리!)
        else if (dir === 0) {

            //슬라이드 개수 감소 
            sno--;
            if (sno === -1) sno = scnt - 1; // 한계수 (마지막번호로!)

        } ///////// else if//////////////
        else { // 블릿으로 이동 ////
            sno = seq;
        } //// 블릿으로 이동 //////////////


        //해당순번 li에 class="on" 지정하기
        tg.find("li").eq(sno).addClass("on")
            .siblings().removeClass("on");

        // 블릿변경
        chgbtn();


    }; ////////////////// goSlide 함수 ////////////////
    /////////////////////////////////////////////////

    /*///////////////////////////////////////
        함수명: autoCall
        기능 : 자동호출기능
    */ ///////////////////////////////////////
    var autoI; //인터벌용변수
    var autoCall = function () {

        console.log("자동넘김!");

        //4초 간격으로 슬라이드 함수 호출
        autoI = setInterval(function () {
            goSlide(-1,1);
        }, 3000); ////// 인터발함수 //////

    }; ////////////////// autoCall 함수 ////////////////
    /////////////////////////////////////////////////

    /*///////////////////////////////////////
        함수명: clearAuto
        기능 : 자동넘김 지우기
    */ ///////////////////////////////////////
    var autoT; //타임아웃용변수
    var clearAuto = function () {
        console.log("자동지워라!");

        // 인터발 지우기
        clearInterval(autoI);
        // 타임아웃지우기(실행쓰나미방지!!!!)
        clearTimeout(autoT);

        // 재실행호출 셋팅(3초후 한번실행 셋팅!)
        autoT = setTimeout(autoCall, 2000);

    }; ////////////////// clearAuto 함수 ////////////////
    /////////////////////////////////////////////////

    /// 자동 넘김 함수 호출!
    autoCall();
    chgbtn();

    
    /// 블릿 클릭시 /////////////////
    $("#slide_btn li").click(function(){
        var idx = $(this).index();
        goSlide(idx,2);
        // 뒤 전달값은 0,1이 아닌값으로 보낸다!
        
        // 자동넘김 지우기
        clearAuto();
        
    });////////// click ///////////////


    /*///////////////////////////////////
        함수명: chgbtn
        기능: 블릿 현재페이지에 맞게 변경하기
    ///////////////////////////////////////////////*/
    function chgbtn() {

        /// 블릿변경하기 - class="on" 주기
        $("#slide_btn li").eq(sno).addClass("on")
            .siblings().removeClass("on");

    } ////////////////////////////////////// chgMenu 함수 /////////////////
    
    
    $(".search_box").mouseenter(function(){
        $(this).css({
            boxShadow: "0px 0px .5px 1px #C7060E",
            width: "20%"
        });/// css //////
        
        $(".search_txt",this).css({
            padding: "0 6px",
            width: "240px"
        });/// css //////
        
    }); //////// mouseenter /////////////


}) /////////////// jQB /////////////////////////
