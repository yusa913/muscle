$(function(){
	var pagetop = $('#page__top');
	pagetop.hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn(1000);
		} else {
			pagetop.fadeOut(1000);
		}
		});
       pagetop.click(function(){
       	$('body, html').animate({scrollTop: 0},500);
       	return false
       });
	});

