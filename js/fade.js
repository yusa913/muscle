$(function(){
	$(window).scroll(function(){
		$('.fadesub').each(function(){
			var distance = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var wh = $(window).height();
			if (scroll > distance - wh +80){

			$(this).addClass('scrollin');

		}
		});
	});
});


$(window).on('scroll', function (){
 
 
    var elem = $('.photo-img-cross');
     
    elem.each(function () {
        var elemTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wh = $(window).height();
 
      
        if(scroll > elemTop - wh + (wh / 2) )
            {
               
                $(this).addClass("photo-move-cross");
            }
    });
 
});

$(window).on('scroll', function (){
 

    var elem = $('.photo-img-crossa');
     
    elem.each(function () {
        var elemTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wh = $(window).height();
 
    
        if(scroll > elemTop - wh + (wh / 4) )
            {
             
                $(this).addClass("photo-move-cross");
            }
    });
 
});

$(window).on('scroll', function (){
 
 
    var elem = $('.photo-img-cross2');
     
    elem.each(function () {
        var elemTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wh = $(window).height();
 
       
        if(scroll > elemTop - wh + (wh / 2) )
            {
                $(this).addClass("photo-move-cross2");
            }
    });
 
});


$(window).on('scroll', function (){
 
    var elem = $('.photo-img-crosso');
     
    elem.each(function () {
        var elemTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wh = $(window).height();

        if(scroll > elemTop - wh + (wh / 2) )
            {
                $(this).addClass("photo-move-cross");
            }
    });
 
});