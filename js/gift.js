(function(){
	//上下滑动
	$('.giftHoverChange').hover(function(){
		var index=$(this).index('.giftHoverChange');
		$($('.giftHoverChange')[index]).find('img:nth-child(1)').css("bottom","-421px");
		$($('.giftHoverChange')[index]).find('img:nth-child(2)').css("top","0px");
	},function(){
		var index=$(this).index('.giftHoverChange');
		$($('.giftHoverChange')[index]).find('img:nth-child(1)').css("bottom","0px");
		$($('.giftHoverChange')[index]).find('img:nth-child(2)').css("top","-421px");
	});
	
	//淡入淡出
	$('.giftOpacityChange').hover(function(){
		var index=$(this).index('.giftOpacityChange');
		$($('.giftOpacityChange')[index]).find('img:nth-child(1)').fadeOut(400)
		$($('.giftOpacityChange')[index]).find('img:nth-child(2)').fadeIn(400);
	},function(){
		var index=$(this).index('.giftOpacityChange');
		$($('.giftOpacityChange')[index]).find('img:nth-child(2)').fadeOut(400)
		$($('.giftOpacityChange')[index]).find('img:nth-child(1)').fadeIn(400);
	});
	
	/*$(window).scroll(function(){
		if($(window).scrollTop()>=170){
			$('.giftCoupWrap').animate({height: '175px', opacity: 'show'}, 'normal',function(){
				$('.giftCoupWrap').show();});
			
			//$('.giftCoupWrap').addClass('giftBottomFixedBox');
			//$('.giftCoupWrap').animate({opacity:'1'},[500]);
			
		} else {
			$('.giftCoupWrap').animate({height: '175px', opacity: 'hide'}, 'normal',function(){
				$('.giftCoupWrap').hide();});
			//$('.giftCoupWrap').removeClass('giftBottomFixedBox');
			//$('.giftCoupWrap').animate({opacity:'0'},[500])
		}
	});*/
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=826 && $(window).scrollTop()<=1620){
			console.log($(window).scrollTop());
			$('.giftFstMenu').show(200);
		} else {
			$('.giftFstMenu').hide(200);
		}
	});
	
	$('.giftFstMenu ul li').on("click",function(){
		var index=$(this).index('.giftFstMenu ul li');
		console.log(index);
		$($('.giftFstMenu ul li')[index]).addClass('active').siblings().removeClass('active');
		$($('.giftFscontBox')[index]).removeClass('hide').siblings().addClass('hide');
	} /*else {
		var index=$(this).index('.giftFstMenu ul li');
		//$($('.giftFstMenu ul li')[index]).removeClass('active');
	}*/);
	
	
})()
