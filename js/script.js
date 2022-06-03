
$(function(){
	$('#contents div[id != "tab1"]').hide();
    $(".click").click(function(){
    $("#contents div").hide();
    $($(this).attr("href")).fadeIn(1000);
    $(".current").removeClass("current")
    $(this).addClass("current");
    	return false;
    });
});




