// JavaScript Document
 $(function(){
   $("#bottom1").mouseover(function(){
    $(this).addClass("animated");
  }); 
  
  $("#bottom1").mouseout(function(){
    $(this).removeClass("animated");
  });
  
  $("#qimg").mouseover(function(){
   // 改变图片的src属性
   $(this).attr("src", "./images/a4.png");
  });
  
  $("#qimg").mouseout(function(){
   // 改变图片的src属性
   $(this).attr("src", "./images/a3.png");
  });
});