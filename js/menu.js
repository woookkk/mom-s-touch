$(function () { ////////////// jQB /////////////////////
    console.log("로딩완료!");

    //////////////// 대표 메뉴 ///////////////
    $(".menu_list li").click(function () {

        var idx = $(this).index();

        //해당순번 li에 class="on" 지정하기
        $(".menu_ban_list li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".menu_list li").eq(idx).addClass("on")
            .siblings().removeClass("on");
    }); ////////// click ////////////

    var addmenu;

    // 메뉴 이미지 설명글 셋팅 ! ///
    var Ebmsg = {
        "burger": [
      "Nashville Hot Chicken Burger",
        "Jalapeno Pain Burger",
        "Salsaiko Burger",
        "Unbelievable Burger",
        "Incredible Burger",
        "Cheese Bacon Burger",
        "Deep Cheese Burger",
        "Fire Burger",
        "White Garlic Burger",
        "Deluxe Bulgogi Burger",
        "Cyber Burger",
        "Wheelet Burger",
        "Ham Cheese Fillet Burger",
        "Whole Shrimp Burger",
        "Bulgogi Burger"
    ],
        "chicken": [
      "222Nashville Hot Chicken Burger",
        "Ja2222lapeno Pain Burger",
        "Sal222saiko Burger",
        "Unb222elievable Burger",
        "Incr222edible Burger",
        "Chee222se Bacon Burger",
        "Deep 222222Cheese Burger",
        "Fire 222222Burger",
        "White222222 Garlic Burger",
        "Delux222222e Bulgogi Burger",
        "Cyber222222 Burger",
        "Wheel222222et Burger",
        "Ham C222222heese Fillet Burger",
        "Whole222222 Shrimp Burger",
        "Bulgo222222gi Burger"
    ],

        "side": [
      "Nashvill33333333333 Hot Chicken Burger",
        "Jalape33333333333o Pain Burger",
        "Salsai33333333333o Burger",
        "Unbeli33333333333vable Burger",
        "Incred33333333333ble Burger",
        "Cheese33333333333Bacon Burger",
        "Deep C33333333333eese Burger",
        "Fire B33333333333rger",
        "White 33333333333arlic Burger",
        "Deluxe33333333333Bulgogi Burger",
        "Cyber 33333333333urger",
        "Wheele33333333333 Burger",
        "Ham Ch33333333333ese Fillet Burger",
        "Whole 33333333333hrimp Burger",
        "Bulgog33333333333 Burger"
    ],
        "drink": [
      "Nashville4444444444444Hot Chicken Burger",
        "Jalapen4444444444444 Pain Burger",
        "Salsaik4444444444444 Burger",
        "Unbelie4444444444444able Burger",
        "Incredi4444444444444le Burger",
        "Cheese 4444444444444acon Burger",
        "Deep Ch4444444444444ese Burger",
        "Fire Bu4444444444444ger",
        "White G4444444444444rlic Burger",
        "Deluxe 4444444444444ulgogi Burger",
        "Cyber B4444444444444rger",
        "Wheelet4444444444444Burger",
        "Ham Che4444444444444se Fillet Burger",
        "Whole S4444444444444rimp Burger",
        "Bulgogi4444444444444Burger"
    ]

    };

    var Bmsg = {
        "burger": [
        "내슈빌핫치킨버거",
        "할라피뇨통살버거",
        "살사리코버거",
        "언빌리버블버거",
        "인크레더블버거",
        "치즈베이컨버거",
        "딥치즈버거",
        "불싸이버거",
        "화이트갈릭버거",
        "디럭스불고기버거",
        "싸이버거",
        "휠렛버거",
        "햄치즈휠렛버거",
        "통새우버거",
        "불고기버거"
    ],
        "chicken": [
        "내슈빌222222222치킨버거",
        "할라피222222222통살버거",
        "살사리222222222버거",
        "언빌리222222222블버거",
        "인크레222222222블버거",
        "치즈베222222222컨버거",
        "딥치즈222222222거",
        "불싸이222222222거",
        "화이트222222222릭버거",
        "디럭스222222222고기버거",
        "싸이버222222222",
        "휠렛버222222222",
        "햄치즈222222222렛버거",
        "통새우222222222거",
        "불고기222222222거"
    ],
        "side": [
        "내슈빌핫3333333치킨버거",
        "할라피뇨3333333통살버거",
        "살사리코3333333버거",
        "언빌리버3333333블버거",
        "인크레더3333333블버거",
        "치즈베이3333333컨버거",
        "딥치즈버3333333거",
        "불싸이버3333333거",
        "화이트갈3333333릭버거",
        "디럭스불3333333고기버거",
        "싸이버거3333333",
        "휠렛버거3333333",
        "햄치즈휠3333333렛버거",
        "통새우버3333333거",
        "불고기버3333333거"
    ],
        "drink": [
        "내슈빌44444444핫치킨버거",
        "할라피44444444뇨통살버거",
        "살사리44444444코버거",
        "언빌리44444444버블버거",
        "인크레44444444더블버거",
        "치즈베44444444이컨버거",
        "딥치즈44444444버거",
        "불싸이44444444버거",
        "화이트44444444갈릭버거",
        "디럭스44444444불고기버거",
        "싸이버44444444거",
        "휠렛버44444444거",
        "햄치즈44444444휠렛버거",
        "통새우44444444버거",
        "불고기44444444버거"
    ]
    };
    var Bursing = {
        "burger": [
        "4,500",
        "5,100",
        "4,900	",
        "4,500",
        "4,000",
        "3,900",
        "4,100",
        "4,000",
        "3,800",
        "3,600",
        "3,900",
        "2,900",
        "3,000"
    ],
        "chicken": [
        "4,500",
        "5,100",
        "4,900	",
        "4,500",
        "4,000",
        "3,900",
        "4,100",
        "4,000",
        "3,800",
        "3,600",
        "3,900",
        "2,900",
        "3,000"
    ],
        "side": [
        "4,500",
        "5,100",
        "4,900	",
        "4,500",
        "4,000",
        "3,900",
        "4,100",
        "4,000",
        "3,800",
        "3,600",
        "3,900",
        "2,900",
        "3,000"
    ],
        "drink": [
        "4,500",
        "5,100",
        "4,900	",
        "4,500",
        "4,000",
        "3,900",
        "4,100",
        "4,000",
        "3,800",
        "3,600",
        "3,900",
        "2,900",
        "3,000"
    ]
    };
    var Burset = [
        "6,500",
        "7,100",
        "6,900",
        "6,500",
        "6,000",
        "5,900",
        "6,100",
        "6,000",
        "5,800",
        "5,600",
        "5,900",
        "4,900",
        "5,000"
    ];

    var burtext = [
        "상큼한 코울슬로와 고소한 화이트치즈에<br>매콤한 특제 핫치킨소스를 <br>입힌 통다리살 패티의 버거",
    ];


    /*////////////////////////////////
        함수명: bset
        기능: 버거for문
    */ ////////////////////////////////
    var bset = function (fno, lno, seq) {
        console.log("함수호출!");


        /// 1. 메뉴박스에 html생성 및 초기화, 캡션글 넣기
        // 대상 : #menu_box
        for (var i = fno; i < lno; i++) {
            $("#menu_box").append(
                '<div class="menu_box_img">' +
                '<img src="images/' + menu + (i + 1) + '.png" class="burger_img" alt="버거">' +
                '<div class="menu_box_text">' +
                '<div>' + Ebmsg[seq][i] + '</div>' +
                '<h3>' + Bmsg[seq][i] + '</h3>' +
                '</div>' +
                '<div class="menu_detail">' +
                '<span class="close_btn">' +
                '<img src="images/close.png" alt="닫기">' +
                '</span>' +
                '<div class="burger_info">' +
                '<h3>' + Bmsg[seq][i] + '</h3>' +
                '<div class="bur_eng">' + Ebmsg[seq][i] + '</div>' +
                ' <div class="bur_price">single' + Bursing[i] + '&nbsp;set' + Burset[i] + '</div>' +
                '</div>' +
                '<div class="bur_text">' + burtext[i] + '</div>' +
                '</div>'
            );

        } /////////////// for //////////////



    }; /////// bset 함수 ////////////
    //////////////////////////////////

    var menu = "burger";

    //최초호출: 0~8
    bset(0, 8, menu);


    $(".add_menu").click(function () {
        bset(8, 15, menu);
        $(this).hide();
    }); ///////////////// click /////////////

    $("a").click(function (e) {
        e.preventDefault();
    });


    $(".menu_list li").click(function () {
        menu = $("h3", this).text().toLowerCase();
        // toLowerCase() 소문자변환
        console.log(menu);

        $("#menu_box").html("");
        //최초호출: 0~8
        bset(0, 8, menu);
        $(".add_menu").show();


    }); ///////// click ////////////////






}); //////////////////// jQB /////////////////////////
/////////////////////////////////////////////////////
