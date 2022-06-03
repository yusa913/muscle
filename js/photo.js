$(function(){

  $(".other__photo").click(function(){
    $(".renove__photo").append('<div id="bg">');

    $(".renove__photo").append('<div id="photo">');

    
    $("#bg").hide();
    $("#photo").hide();

    
    $("#photo").html("<img>");

    
    $("#photo img").attr("src", $(this).attr("href"));


    $("#photo img").attr("width", 700);
    $("#photo img").attr("height", 600);
    

  
    $("#bg").fadeIn();
    $("#photo").fadeIn();

    
    $("#bg").click(function(){
    
      $(this).fadeOut(function(){
        $(this).remove();
      });

      $("#photo").fadeOut(function(){
        $(this).remove();
      });
    });

    return false;
  });
});
