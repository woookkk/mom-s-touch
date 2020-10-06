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
    var Emtitle = {
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
      'Nashville Hattong Bridge',
      'Soy Sauce Garlic Chicken',
      'Allulose Chicken',
      'Steamed Sauce Chicken',
      'Cheongsam Chicken',
      'Bulsa Chikin',
      'Flakes Garlic Chicken',
      'Onion Cheese Pucci',
      'Fried Chicken',
      'Cajun Wing',
      'Boneless Chicken',
      'Chicken Gangjeong',
      'Cajun Gangjeong'
    ],

        "side": [
        'Coleslaw',
        'Corn Salad',
        'Crispy Cream Cheese Ball',
        'Cheese Stick',
        'Cajun Seasoned Potatoes',
        'Cheese Potato',
        'Onion Cheese Potato',
        'Egg wrap (2 types)',
        'Wheel wrap',
        'Jalapeno nuggets',
        'Kim Tteokman',
        'tenter (2 pieces)',
        'Popcorn dumplings (2 types)',
        'Popcorn Ball',
        'Sweet Potato Cheese Ball'
    ],
        "drink": [
        'Cola',
        'Hot chocolate',
        'Lemon Black Tea',
        'Black tea',
        'Lemonade',
        'Green grape ade',
        'Mangoade',
        'Peach Ade',
        'Super Berry Water Juice',
        'Lemon Tea',
        'Herb Peach Tea',
        'Americano',
        'Orange juice'
    ]

    };

    var Mtitle = {
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
        '내슈빌핫통다리',
        '간장마늘치킨',
        '알룰로스치킨',
        '찜햇닭',
        '치파오치킨',
        '불사치킨',
        '후레이크 갈릭치킨',
        '어니언치즈뿌치',
        '후라이드치킨',
        '케이준윙',
        '순살치킨',
        '치킨강정',
        '케이준강정'
    ],
        "side": [
        '코울슬로',
        '콘샐러드',
        '바삭크림치즈볼',
        '치즈스틱',
        '케이준양념감자',
        '치즈감자',
        '어니언치즈감자',
        '에그랩(2종)',
        '휠랩',
        '할라피뇨너겟',
        '김떡만',
        '텐터로인(2조각)',
        '팝콘만두(2종)',
        '팝콘볼',
        '고구마치즈볼'
    ],
        "drink": [
        '콜라',
        '핫초코',
        '레몬홍차',
        '홍차',
        '레몬에이드',
        '청포도에이드',
        '망고에이드',
        '복숭아에이드',
        '슈퍼베리워터주스',
        '레몬티',
        '허브복숭아티',
        '아메리카노',
        '오렌지쥬스'
    ]
    };
    var Mprice = {
        "burger": [
        "single 4,100 &nbsp; set 6,100",
        "single 3,900 &nbsp; set 5,900",
        "single 4,500 &nbsp; set 6,500",
        "single 5,100 &nbsp; set 7,100",
        "single 4,900 &nbsp; set 6,900",
        "single 4,500 &nbsp; set 6,500",
        "single 4,000 &nbsp; set 6,000",
        "single 3,900 &nbsp; set 5,900",
        "single 4,100 &nbsp; set 6,100",
        "single 4,000 &nbsp; set 6,000",
        "single 3,800 &nbsp; set 5,800",
        "single 3,600 &nbsp; set 5,600",
        "single 3,900 &nbsp; set 5,900",
        "single 2,900 &nbsp; set 4,900",
        "single 3,000 &nbsp; set 5,000"

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

    var Mtext = {

        "burger": [
             '상큼한 코울슬로와 고소한 화이트치즈에<br>매콤한 특제 핫치킨소스를 <br>입힌 통다리살 패티의 버거'
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
                '<div class="menu_click_box">' +
                '<img src="images/' + menu + (i + 1) + '.png" class="burger_img" alt="메뉴이미지">' +
                '<div class="menu_box_text">' +
                '<div>' + Emtitle[seq][i] + '</div>' +
                '<h3>' + Mtitle[seq][i] + '</h3>' +
                '</div>' +
                '</div>' +
                '<div class="menu_detail">' +
                '<span class="close_btn">' +
                '<img src="images/close.png" alt="닫기">' +
                '</span>' +
                '<div class="menu_info">' +
                '<h3>' + Mtitle[seq][i] + '</h3>' +
                '<div class="menu_eng">' + Emtitle[seq][i] + '</div>' +
                '<div class="menu_price">' + Mprice[seq][i] + '</div>' +
                '</div>' +
                '<div class="menu_info_text">' +
                '<span>' + Mtext[seq][i] + '</span>' +
                '</div>' +
                '</div>' +

                '</div>'
            );

        } /////////////// for //////////////


    }; /////// bset 함수 ////////////
    //////////////////////////////////


    var menu = "burger";

    //최초호출: 0~8
    bset(0, 8, menu);


    // 한계수 셋팅
    var limit = {
        "burger": 15,
        "chicken": 13,
        "side": 15,
        "drink": 13
    };

    $(".menu_click_box").click(function () {
        $(this).next().show();
    }); ////////// click /////////////

    $(".close_btn").click(function () {
        $(this).parent().hide();
    }); ////////// click ///////




    $(".add_menu").click(function () {
        bset(8, limit[menu], menu);
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
