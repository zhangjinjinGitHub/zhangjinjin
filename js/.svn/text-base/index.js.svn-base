
$(function(){
	/***********小广告***************/
	$("#indexAdlet .indexAdlet_btn").click(function(){
		$('#indexAdlet').remove();
	})
})



/**********轮播图********/
	var index = 0;
	$(function (){	
		show();
		setInterval('change()',4000)

		$(" #indexBanner .num li").click(function(){
			index = $(this).index();
			$('#indexBanner .num li').eq(index).css('background','#fff').siblings().css('background','#777') ;
			$('#indexBanner .slider').find('li').eq(index).fadeIn().siblings().fadeOut();
					
		})
			
	});
	
	function show(){
		// 当前下标的图片显示，其他图片隐藏
		$('#indexBanner .slider').find('li').eq(index).fadeIn().siblings().fadeOut();
		$('#indexBanner .num li').eq(index).css('background','#fff').siblings().css('background','#777') ;
	}
	
	function change(){		
		index++;
		if(index == 7){
			index = 0;
		};
		show();
	}



$(function(){
	
	/************内容*****************/	
	$("#indexContent ul li").hover(function(){
		$(this).find('span').css({display:" block"});
		//图片显示阴影 
		$(this).css({boxShadow:'0 0 2px 2px #c7c7c7'});
	},function(){
		$(this).find('span').css({display:" none"});
		//图片隐形消失
		$(this).css({boxShadow:"none"});
	})
		


	/*********遮罩层*************/
	$(window).scroll(function (){
		// 获取滚动条滚动距离
		var t = $(this).scrollTop();
		// 当滚动距离超过头部div（header），显示图片
		// 否则隐藏
		if(t < 100){
			$("#cs31").hide();
		} else {
			$("#cs31").show();
		}	
	})
	
	$("#cs31").click(function(){
			//点击的时候 #cs31 向左移动消失
		$("#cs31").attr('class','animated  fadeOutLeft');
			//然后 #cs32 从左边弹出来
		$("#cs32").attr('class','animated  bounceInLeft');
		$(window).scroll(function (){
			// 获取滚动条滚动距离
			var t = $(this).scrollTop();
			// 当滚动距离超过头部div（header），显示图片
			// 否则隐藏
			if(t < 100){
				$("#cs32").hide();
			} else {
				$("#cs32").show();
			}
		})
	})

	$("#cs32").find('#close').click(function(){
			//点击的时候 #cs32向左移动消失
		$("#cs32").attr('class','animated  fadeOutLeft');
			//然后#cs31 从左边弹出来
		$("#cs31").attr('class','animated  bounceInLeft');
		$(window).scroll(function (){
			// 获取滚动条滚动距离
			var t = $(this).scrollTop();
			// 当滚动距离超过头部div（header），显示图片
			// 否则隐藏
			if(t < 100){
				$("#cs31").hide();
			} else {
				$("#cs31").show();
			}
		})
	})





})




















