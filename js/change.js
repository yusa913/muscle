$(function(){
	$(".menu__img--js img").on("click" , function
		(){
		   img = $(this).attr("src");
		   $(".main__img--js img").fadeOut(500 , function(){
		   	$(".main__img--js img")
  				.attr("src", img)
		   	.on("load" , function(){
		   		$(this).fadeIn(500);
		   	});

		   });
	});
});
$(function(){
	$(".menu__img--js2 img").on("click" , function
		(){
		   img = $(this).attr("src");
		   $(".main__img--js2 img").fadeOut(500 , function(){
		   	$(".main__img--js2 img")
  				.attr("src", img)
		   	.on("load" , function(){
		   		$(this).fadeIn(500);
		   	});
		   });
	});
});
$(function(){
	$(".menu__img--js3 img").on("click" , function
		(){
		   img = $(this).attr("src");
		   $(".main__img--js3 img").fadeOut(500 , function(){
		   	$(".main__img--js3 img")
  .attr("src", img)
		   	.on("load" , function(){
		   		$(this).fadeIn(500);
		   	});
		   });
	});
});

$(function(){
	$(".menu__img--js4 img").on("click" , function
		(){
		   img = $(this).attr("src");
		   $(".main__img--js4 img").fadeOut(500 , function(){
		   	$(".main__img--js4 img")
  .attr("src", img)
		   	.on("load" , function(){
		   		$(this).fadeIn(500);
		   	});
		   });
	});
});





















































$(function () {
  $(".js-sub-img img").on("click", function () {


    img = $(this).attr("src");



    $(".js-main-img img").fadeOut(500, function () {
      $(".js-main-img img")


        .attr("src", img)


        .on("load", function () {
          $(this).fadeIn(500);
        });
    });
  });
});