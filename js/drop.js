$(function(){
  $(".drop").hover(function(){
    $(this).children(".drop__menu").stop().slideToggle(500);
  });
});

