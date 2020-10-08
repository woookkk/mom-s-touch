$(function(){////////////// jQB /////////////////////
    console.log("로딩완료!");
    
    
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
    for (var i = 0; i < 4; i++){
        $(".step_list_wrap1").append(
        '<ul class="step_list_box">'+
        '<li class="step_list_img">'+
        '<div class="step_img">'+
        '<img src="images/step'+(i+1)+'.png" alt="개설절차">'+
        '<div class="step_list_num">STEP'+(i+1)+'</div>'+
        '</div>'+
        '</li>'+
        '<li class="step_list_text">'+
        '<ul>'+
        '<li class="step_text_title">'+stepT[i]+'</li>'+
        '<li>'+stepLf[i]+'</li>'+
        '<li>'+stepLs[i]+'</li>'+
        '<li>'+stepLt[i]+'</li>'+
        '</ul>'+
        '</li>'+
        '</ul>'
            
        );
          
    }//////////// for ////////////
  
    for (var i = 4; i < 8; i++){
        $(".step_list_wrap2").append(
        '<ul class="step_list_box">'+
        '<li class="step_list_img">'+
        '<div class="step_img">'+
        '<img src="images/step'+(i+1)+'.png" alt="개설절차">'+
        '<div class="step_list_num">STEP'+(i+1)+'</div>'+
        '</div>'+
        '</li>'+
        '<li class="step_list_text">'+
        '<ul>'+
        '<li class="step_text_title">'+stepT[i]+'</li>'+
        '<li>'+stepLf[i]+'</li>'+
        '<li>'+stepLs[i]+'</li>'+
        '<li>'+stepLt[i]+'</li>'+
        '</ul>'+
        '</li>'+
        '</ul>'
            
        );
          
    }//////////// for ////////////
  
    
    
});//////////////////// jQB /////////////////////////
/////////////////////////////////////////////////////
    
   