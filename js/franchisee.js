$(function(){////////////// jQB /////////////////////
    console.log("로딩완료!");
    
    
    
    
    
    
    /// 1. 메뉴박스에 html생성 및 초기화, 캡션글 넣기
        // 대상 : .step_list_wrap
    for (var i = 0; i < 8; i++){
        $(".step_list_wrap").append(
        '<div class="step_list_box">'+
        '<div class="step_img">'+
        '<img src="images/step'+(i+1)+'.png" alt="개설절차">'+
        '<div class="step_list_num">STEP'+(i+1)+'</div>'+
        '</div>'+
        '<ul class="step_list_text">'+
        '<li class="step_text_title">가맹점 문의상담 </li>'+
        '<li>- 홈페이지 접수 및 전화 </li>'+
        '<li>&nbsp</li>'+
        '<li>&nbsp</li>'+
        '</ul>'+
        '</div>'
            
        );
        
        
    }//////////// for ////////////
    
    
});//////////////////// jQB /////////////////////////
/////////////////////////////////////////////////////