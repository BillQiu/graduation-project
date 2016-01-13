
// 搜索框动画
$(function() {
	$("input[type=text]").focus(function() {
		$(this).animate({width: 250}, 500)
		.siblings().animate({opacity: .6,}, 500);
	}).blur(function() {
		$(this).animate({width: 200}, 500)
		.siblings().animate({opacity: .4}, 500);
	});
});



// 四大类动画
$(function() {
	$(".type-container i").mousemove(function() {
		if ( !$(this).siblings().is(":animated") ) {
			$(this).siblings().animate({opacity: 0}, 500);
		}
	});
	$(".type-container i").mouseleave(function() {
		$(this).siblings().animate({opacity: 1}, 500);
	});

})


