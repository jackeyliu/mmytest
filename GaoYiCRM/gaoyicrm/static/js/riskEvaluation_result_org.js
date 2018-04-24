$(document).ready(function(){

	$.getJSON('/result/', function(ret){
		if(ret.totalPoint<40){
			$("#result-name").text('保守型');
			$("#leixing").text('保守型');

		}else if(ret.totalPoint>=40 && ret.totalPoint<=60){
			$("#result-name").text('成长型');
			$("#leixing").text('成长型');
		}else{
			$("#result-name").text('进取型');
			$("#leixing").text('进取型');
		}
		$("#fenshu").text(ret.totalPoint);
	});

	$("#result-btns-again").click(function(){
		window.location.href="../questionnaire";
	});
	$("#result-btns-submit").click(function(){
		window.location.href="../account_home";
	});
});