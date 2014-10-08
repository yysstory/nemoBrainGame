//페이지 로드되자마자 실행되는 함수

var round = 3 ;
var imsi;
var suc=0;
var fa=0;
var nemo=120;
var total=0;
var count;

$(function() {
	alert("노란색을 잘 기억해서 클릭해주세요~")
	timeOut();

	drawTable();
	startGame();
	

	$('h2').html('1라운드');
	$('#remainBlock').html('남은 블록 : '+ parseInt(imsi-suc)+' 개');
	$('#chance').html('남은 기회 : 5 회');
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

setTimeout(function() {


$('#t1').on('click','td',function() {
	var e1 = $(this).attr('class');
	//정답일때
	if (e1 === 'c3') {
		$(this).addClass('c1').removeClass('c3');
		suc++;
		passCheck();
		addScore();
		$('#remainBlock').html('남은 블록 : '+ parseInt(imsi-suc)+' 개');
	//오답일때
	} else if (e1 === 'c0') {
		$(this).addClass('c2').removeClass('c0');
		failCheck();
	} //그외
	else {
	}
});


}, 2000)

/*
  $("do").click(function(event){
    event.stopPropagation();

*/
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
					.attr('width',nemo).attr('height',nemo)
					.fadeIn(1500));
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
	$('#t1>tbody').remove();
	drawTable();
	startGame();
	$('h2').html(round-2 +'라운드');
	$('#remainBlock').html('남은 블록 : '+imsi-suc);
	}else{
	}	
}

function failCheck(){

	fa++;
	console.log('fa'+fa);
	if(fa>4){
		alert('실패했습니다! 처음 게임으로 이동합니다!');
		location.reload(true);	
		fa=0;
	}else{
		$('#chance').html('남은 기회 :'+parseInt(5-fa)+' 회');
	}
}


function timeOut(){
	var sec = 60;
	var timer = setInterval(function() {
	   $('#time').text('Time : '+sec--);
	   if (sec == -1) {
	      $('#time').fadeOut('slow');
	      clearInterval(timer);
	      var a=$('#time').html();
	      console.log(a);
	      if(sec<1){
	  		alert('타임아웃! 처음 게임으로 이동합니다!');
			location.reload(true);	
	      }
	   }
	}, 1000); 		
}


function addScore(){
	
	var score = (round-2)*10;
	total=total+score;
	$('#score').html('누적점수 : '+total+ ' 점');
}


function startRound(){
	
	count = setInterval(function() {console.log('interval',count);}, 5000);
	
}

//남은 정답갯수 함수
