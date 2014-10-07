//페이지 로드되자마자 실행되는 함수

var round = 2 ;
var imsi;
var suc=0;
var fa=0;

$(function() {
	alert("노란색을 잘 기억해서 클릭해주세요~")
	drawTable();
	startGame();

})

function startGame(){
	
	for (var i = 0; i < round*round; i++) {
		var v = "#d" + i;
		$(v).addClass(ranSu());
	}
	
	//정답 갯수 저장
	imsi=$('.c3').length;
	
	
	$(".c3").css('background-color','#a8ac53');


	setTimeout(function() {
		$(".c3").css('background-color','')
	}, 2000);

}





// 셀을 클릭시 실행되는 함수
$(document).on('click','td',function() {
	var e1 = $(this).attr('class');
	if (e1 === 'c3') {
		$(this).addClass('c1').removeClass('c3');
		suc++;
		passCheck();
	} else if (e1 === 'c0') {
		$(this).addClass('c2').removeClass('c0');
		failCheck();
	} else {
	}
});

function ranSu() {
	var ran = Math.random() * 10;
	if (ran > 5)
		return 'c0';
	else
		return 'c3';
}

function drawTable(){
	var nemo=100;
	var no = 0;
	for(i=0;i<round;i++){
		var r	= $('<tr>').appendTo('#t1');
		for(j=0;j<round;j++){
			r.append($('<td>').attr('id','d'+no)
					.attr('width',nemo).attr('height',nemo).fadeIn(2000));
			no++;
		}
	}
}


function passCheck(){
	if(imsi===suc){
	alert('성공했습니다! 다음단계로 넘어갑니다!');
	round++;
	imsi=0;
	suc=0;
	$('tbody').remove();
	drawTable();
	startGame();
	
	}else{
	}	
}

function failCheck(){

	fa++;
	if(fa>1);
	alert('실패했습니다.! 새로운 게임으로 이동합니다!');
	fa=0;
	
}
/*
function removeCl() {
	$(this).removeClass('c0').
	removeClass('c1').
	removeClass('c2').
	removeClass('c3');
}
*/
/*
 * <script> $( "p" ).click(function() { $( this ).slideUp();
 * 
 * });
 * 
 * </script>
 */

/*
 * $(function() { setInterval(function() { }, 1000); });
 */