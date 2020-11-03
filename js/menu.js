$(function () { ////////////// jQB /////////////////////
    console.log("로딩완료!");

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
        "1piece 4,300",
        "whole 18,000 &nbsp; half 9,500",
        "whole 18,000 &nbsp; half 9,500",
        "whole 17,000 &nbsp; half 9,000",
        "whole 17,000 &nbsp; half 9,000",
        "whole 17,000 &nbsp; half 9,000",
        "whole 17,000 &nbsp; half 9,000",
        "whole 17,000 &nbsp; half 9,000",
        "whole 15,000 &nbsp; half 8,000",
        "10piece 8,500 &nbsp; 20piece 15,000",
        "10piece 8,500 &nbsp; 20piece 15,000",
        "whole 16,000 &nbsp; half 8,500",
        "couple 7,000 &nbsp; regular 10,000",
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
             '상큼한 코울슬로와 고소한 화이트치즈에<br>매콤한 특제 핫치킨소스를 <br>입힌 통다리살 패티의 버거',
            '통다리살 치킨패티와<br> 매콤하면서 깔끔한 뒷맛이 일품인<br> 할라피뇨 소스가 잘 어우러진 버거',
            '매콤, 달콤, 새콤 살사소스로<br> 입맛 확 살리~는 통다리살버거',
            '통새우, 에그프라이, 부드러운 통가슴살에<br> 매콤한 스리라차 마요 소스를 더한<br> 환상적인 조합의 대확행버거',
            '에그프라이, 프리미엄 더블햄,<br> 통다리살패티에 신선한 양상추가 들어간 <br>큰 행복을 즐길 수 있는 대확행 버거',
            '통가슴살패티와 바삭 스모키한 베이컨칩, <br> 부드러운 화이트치즈소스가 어우러진 <br> 환상적인 조합의 프리미엄 버거',
            '부드러운 치즈와  <br> 한층 더 촉촉해진 닭가슴살로  <br> 딥~하게 빠져드는 버거',
            '불 맛이 살아있는 싸이버거의 진火, <br>싸이버거의 매운 버전 버거',
            '크림처럼 부드러운 화이트 갈릭 소스에<br>프리미엄 더블햄과 통가슴살 패티까지<br>하나에 다 담은 묵직한 버거!',
            '풍미 가득한 불고기 패티 두장에<br> 신선한 양상추와 고소한 치즈를 더한 <br> 완벽한 조합의 프리미엄 버거',
            '매콤한 통다리살 패티가 통째로~<br>양파와 양상추가 조화를 이루는 <br> 맘스터치 시그니처 버거',
            '보기만 해도 먹음직한 치킨과 <br> 상큼한 양상추가 만들어내는 버거',
            '영양가득 푸짐한 햄과 치킨,<br> 상큼한 양상추가 만들어내는 영양 버거',
            '통새우살의 씹히는 맛과<br> 바삭한 코코넛 가루 표면의 <br> 고소하고 바삭한 프리미엄 통새우 버거',
            '영양 만점의 불고기 패티에<br> 고소한 불고기 소스를 가미하여<br> 한층 더 맛있는 영양 버거'
    ],
        "chicken": [
        "큼직한 통다리살에<br>매콤한 특제 핫치킨소스와 <br>씨즈닝을 입힌 치킨(1조각)",
        "감칠맛 가득 마늘의 풍미와 <br>간장소스의 풍부한 맛이 <br>어우러진 치킨",
        "양념치킨에 맛과 행복을 더한<br> 알룰로스 프리미엄 양념치킨",
        "정통 찜닭 소스와 바삭한 누룽지,<br> 야채가 어우러진찜닭의 완벽한 재탄생!",
        "라유에 볶아 은은한 파향,<br>흑임자와 사천식 소스로 즐기는<br> 중화 요리 치킨 (뼈 있는 치킨 타입)",
        "얼얼한 사천의 매운 맛!<br> 사천식 매운 양념으로 깊고 진한 풍미를 <br>느낄 수 있는 중화풍 컨셉의 치킨.",
        "마늘향이 그윽하게~!<br> 바삭한 후레이크 갈릭치킨",
        "고단백 저칼로리 영양 만점의 <br>바삭바삭한 치킨에<br> 고소한 어니언치즈 시즈닝을 뿌려먹는 치킨",
        "후라이드 치킨의 <br> 고소함과 바삭바삭함이 그대로!",
        "쌀눈 함유 오일로 튀겨내어 <br> 필수영양성분과 육즙이 풍부한 치킨",
        "뉴올리언즈의 정통 <br> 케이준 치킨의 맛을 그대로 살린 맛!",
        "3저(지방, 칼로리, 콜레스테롤)1고(단백질)!<br>최고의 부위 가슴 순살로 만든<br> 영양 만점 순살 치킨",
        "달콤~한 바삭함! <br> 바삭바삭한 순살강정과 가래떡의 <br> 매콤달콤한 환상적인 조화!"
    ],
        "side": [
        "입맛을 돋우는 양배추의<br> 아삭한 식감과 상큼한 맛의 코울슬로",
        "누구나 좋아하는 스위트콘에<br> 신선한 야채가 어우러진 콘샐러드",
        "달콤한 치즈의 풍미를<br> 바삭하고 쫀득하게 즐기는 치즈볼",
        "고단백 영양만점의<br> 모짜렐라 치즈스틱~",
        "맘스터치의 베스트 사이드메뉴! <br>케이준스타일의 바삭한 양념감자",
        "케이준 양념감자와<br> 깊고 진한 딥치즈 소스를 <br>함께 즐길 수 있는 치즈감자",
        "치즈감자에<br> 향긋한 어니언치즈 시즈닝을<br> 뿌려먹는 어니언치즈감자",
        "또띠아에 양상추, 피클, 토마토와<br> 텐더로인이 통째로!<br> 너겟소스와 어우러진 다이어트식 한끼식사",
        "담백한 또띠아에<br> 에그프라이/베이컨와 신선한 야채로<br> 건강하고 맛있게 즐기는 라이트한 한끼식사",
        "콕콕 박힌 할라피뇨로 <br>매콤하게 즐기는 할라피뇨 너겟",
        "바삭한 김말이, 쫄깃한 떡강정과<br> 팝콘만두를 소스에 맛있게 버무린 김떡만",
        "겉은 바삭, 속은 촉촉하고<br> 부드러운 텐더로인(2조각)",
        "팝콘스타일 만두!<br> 고단백 저칼로리의 닭가슴살이 함유된<br> 오리지널 만두와 어니언치즈 만두!",
        " 팝콘모양의 치킨볼!<br> 시원한 음료와 함께 즐기는 대표 간식~",
        "한입에 쏙쏙~~<br>고구마의 달콤함이<br> 영양치즈와의 환상적 만남!"
    ],
        "drink": [
        "가슴까지 시원한 콜라 한 잔!",
        "따뜻하고 달콤한 핫초코",
        "잉글리시 브랙퍼스트 티백차에<br> 레몬셀 가득한 레몬시럽이 들어가 <br>비타민C까지 즐길 수 있는 레몬홍차",
        "잉글리시 브랙퍼스트 티백차의<br> 고급스러운 맛을 즐길 수 있는<br> 맘스터치만의 가성티(TEA)",
        "착즙 방식으로 레몬셀이 살아있어<br> 레몬의 맛과 청량감을 느낄 수 있는<br> 레몬 에이드",
        "청포도알맹이가 쏙쏙~<br> 상큼한 청포도에이드",
        "열대과일 망고퓨레가 가득~ <br>달콤한 망고에이드",
        "복숭아의 달콤함과 청량감을 그대로!<br> 복숭아 에이드",
        "블루베리, 라즈베리 등<br> 7가지 베리의 새콤달콤한 맛을<br> 즐길 수 있는 무카페인 음료",
        "착즙 방식으로 레몬셀이 살아있어<br> 풍부한 레몬의 맛과 <br>향을 즐길 수 있는 레몬티",
        "캐모마일, 페퍼민트 등 <br>건강한 허브티베이스와<br> 달콤한 복숭아의 싱그러운 만남",
        "맘스터치만의 원두를 사용해 <br>부드러운 맛과 커피 본연의<br> 풍미를 살린 아메리카노",
        "오렌지과즙이 풍부한 <br>상큼한 오렌지 주스"
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
                '<img src="images/close_2.png" alt="닫기">' +
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
    
    
    //////////////// 대표 메뉴 ///////////////
    $(".menu_list li").click(function () {
<<<<<<< HEAD

        var idx = $(this).index();
        console.log(idx);

=======

        var idx = $(this).index();
        console.log(idx);

>>>>>>> 6f5bc01431e22e27bbb7a340e274bd780c99fff8
        //해당순번 li에 class="on" 지정하기
        $(".menu_ban_list li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".menu_list li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        
        /// 숨긴 더보기 버튼 보이기
        $(".add_menu span").show();
        
    }); ////////// click ////////////
            

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
    
    // 리스트가 추가될때마다 다시한번 click 설정을 바꿔야함!
    // 따라서 함수로 만들어서 ~!!!
    var showDesc = function(){
        
        $(".menu_click_box").click(function () {
            $(this).next().show();
        }); ////////// click /////////////

        $(".close_btn").click(function () {
            $(this).parent().hide();
        }); ////////// click ///////
        
    };////// showDesc 함수 ////////////
    

    //  설명박스 보이기 설정함수 호출!
     showDesc();




    $(".add_menu span").click(function () {
        bset(8, limit[menu], menu);
        $(this).hide();
        
        
        //  설명박스 보이기 설정함수 호출!
        showDesc();


    }); ///////////////// click /////////////
/*

    $("a").click(function (e) {
        e.preventDefault();
    });
*/


    $(".menu_list li").click(function () {
        menu = $("h3", this).text().toLowerCase();
        // toLowerCase() 소문자변환
        console.log(menu);

        $("#menu_box").html("");
        //최초호출: 0~8
        bset(0, 8, menu);
        $(".add_menu").show();
        

        //  설명박스 보이기 설정함수 호출!
         showDesc();


    }); ///////// click ////////////////

    $(".add_menu span").hover(function(){
        $(this).css({
            backgroundColor:"transparent"
        })
    },function(){
       $(this).css({
          backgroundColor:"#ddd",
          transition: ".5s"
       }); 
    });///// hover ////
    
    
    /// 페이지 새로 고칠때 맨위로 가게하기(브라우저 캐쉬가 잘 안지워져서 쓰는 것임!) 
    setTimeout(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 10); /// animate ////
    }, 500); //// 타임아웃 ////////
    
    
   /* var lpno = $(".gnb_box li a").index();
    var tg = lpno.this
    
     var link = [
                "menu.html",
                "",
                "info.html",
                "franchisee.html"
            ];
    
            $(".gnb_box li a").click(function(){
                
                console.log(lpno+"번째");
                
                location.href = link[lpno];
                
            });*////////click ///////////


}); //////////////////// jQB /////////////////////////
/////////////////////////////////////////////////////
