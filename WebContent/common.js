//페이지 로드되자마자 실행되는 함수

var round = 3 ;
var imsi;
var suc=0;
var fa=0;
var nemo=120;

$(function() {
	alert("노란색을 잘 기억해서 클릭해주세요~")
		timeOut();
	drawTable();
	startGame();
	$('h2').html('1라운드');


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
	}, 1500);	

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
	
	var no = 0;
	for(i=0;i<round;i++){
		var r	= $('<tr>').appendTo('#t1');
		for(j=0;j<round;j++){
			r.append($('<td>').attr('id','d'+no)
					.attr('width',nemo).attr('height',nemo).fadeIn(1500));
			no++;
		}
	}
	console.log("'"+nemo+"'");
	nemo=nemo-15;
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
	$('h2').html(round-2 +'라운드');
	}else{
	}	
}

function failCheck(){

	fa++;
	if(fa>1){
		alert('실패했습니다.! 처음 게임으로 이동합니다!');
		location.reload(true);	
		fa=0;
	}
}


function timeOut(){
	var sec = 10;
	var timer = setInterval(function() {
	   $('h3').html('Time'+sec--);
	   if (sec == -1) {
	      $('h3').fadeOut('slow');
	      clearInterval(timer);
	       
	      var a=$('h3').html();
	       console.log('time :'+a);
	      if(a<1){
	  		alert('타임아웃! 처음 게임으로 이동합니다!');
			location.reload(true);	
	      }
	   }
	}, 1000);
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