$(".box li").mouseenter(function(){
	$(this).children("p").animate({
		"height":"40px",
	},500);
	$(this).children("div:even").animate({
		"width":"100%",
	},500).css("background","#c11920");
	$(this).children("div:odd").animate({
		"height":"100%",
	},500).css("background","#c11920");
});

$(".box li").mouseleave(function(){
	$(this).children("p").animate({
		"height":"0px"
	});
	$(this).children("div:even").animate({
		"width":"0%",
	},500).css("background","#c11920");
	$(this).children("div:odd").animate({
		"height":"0%",
	},500).css("background","#c11920");

});