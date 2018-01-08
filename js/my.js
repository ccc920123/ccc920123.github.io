// JavaScript Document// JavaScript Document


	
/*设计团队的鼠标移上去，出现人物名字*/ 
 
 $(function(){
	/*图片hover模糊*/
     /*$(".list-img,.material-img").hover(
       function(){
	      $(this).find("img").stop().animate({opacity:'.6'},400);
	    },
       function(){
	       $(this).find("img").stop().animate({opacity:'1'}) 
	   });*/
	   /***鼠标移入显示***/
	   $('.imglist li,.i-caseList li').find('.name,.i-case-txt').hide();
	   $(".imglist li,.i-caseList li").hover(
       function(){
	      $(this).find(".name,.i-case-txt").stop().slideDown(200);
	    },
       function(){
	       $(this).find(".name,.i-case-txt").stop().hide(); 
	   });
	  /***点击选中高亮显示***/
	 /* var $classify = $('.classify-2').find('a');
	  $classify.click(function(){
		  $(this).toggleClass('current');
	  });*/
	  /**鼠标移入显示**/
	  /*var $boxF = $(".dsg-list dl");
	  $boxF.hover(function(){
		  $(this).find('.hidde-link').fadeIn(400);
	  },function(){
		  $(this).find('.hidde-link').hide();
	  });*/
	  

})

$(function(){
	/*$(".guidelist li").hover(
		function () {
			$(this).attr("class", "mouseon");
		  },
		  function () {
			$(this).attr("class", "mouseout");
		  }
	);
	$(".ftoollist li").mouseover(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var preNumber=$(this).prevAll().size();
		$(".fimglist li").removeClass("onpre");
		$(".fimglist li:nth-child("+preNumber+")").addClass("onpre");
		var margin = 290;
		margin = margin *preNumber; 
		margin = margin * -1;
		$(".fimglist").stop().animate({marginLeft: margin + "px"}, {duration: 500});
	});*/
	
	/*jQuery(".full_banner").slide({
		 titCell:".hd ul", 
		 mainCell:".bd ul", 
		 effect:"fold",  
		 autoPlay:true, 
		 autoPage:true,
		 trigger:"click",
		 interTime:8000
	});	*/
	$("#s1").xslider({
			unitdisplayed:4,
			movelength:1,
			autoscroll:4000,
			nowlength:10*231
		});
})