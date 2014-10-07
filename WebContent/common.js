//페이지 로드되자마자 실행되는 함수
$(function() {
	for (var i = 1; i < 11; i++) {
		var v = "#d" + i;
		$(v).addClass(ranSu());
	}
	

	
	$(".c3").addClass('c1'); 
	$(".c1").removeClass('c3');
	
	
	
	setTimeout(function (){
		$(".c1").addClass('c3');
	},2000);
	
	
	$(".c3").removeClass('c1');
	$(".c3").removeClass('c1 c3');
	
	
})


// 셀을 클릭시 실행되는 함수
$('td').click(function() {

		var e1 = $(this).attr('class');
		if (e1 === 'c3') {
			$(this).removeClass('c0');
			$(this).removeClass('c2');
			$(this).removeClass('c1');
			$(this).removeClass('c3');
			$(this).addClass('c1');
		} else if (e1 === 'c0') {
			$(this).removeClass('c0');
			$(this).removeClass('c1');
			$(this).removeClass('c2');
			$(this).removeClass('c3');
			$(this).addClass('c2');
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


function removeClass(){
	$(this).removeClass('c0');
	$(this).removeClass('c1');
	$(this).removeClass('c2');
	$(this).removeClass('c3');
}

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