$(function(){
	$(".tip1").hover(function(){
		$("#new1").append('<div id="tiptext"><p></p></div>'); 
		$("#tiptext p").html($(this).children().attr("alt"));
		$("#tiptext").hide();
		$("#tiptext").fadeIn(1000);
	}, function(){
		$("#tiptext").remove()
	});
});
$(function(){
	$(".tip2").hover(function(){
		$("#new2").append('<div id="tiptext2"><p></p></div>'); 
		$("#tiptext2 p").html($(this).children().attr("alt"));
		$("#tiptext2").hide();
		$("#tiptext2").fadeIn(1000);
	}, function(){
		$("#tiptext2").remove()
	});
});
$(function(){
	$(".tip3").hover(function(){
		$("#new3").append('<div id="tiptext3"><p></p></div>'); 
		$("#tiptext3 p").html($(this).children().attr("alt"));
		$("#tiptext3").hide();
		$("#tiptext3").fadeIn(1000);
	}, function(){
		$("#tiptext3").remove()
	});
});
$(function(){
	$(".tip4").hover(function(){
		$("#new4").append('<div id="tiptext4"><p></p></div>'); 
		$("#tiptext4 p").html($(this).children().attr("alt"));
		$("#tiptext4").hide();
		$("#tiptext4").fadeIn(1000);
	}, function(){
		$("#tiptext4").remove()
	});
});