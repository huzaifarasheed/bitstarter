	//Name function
	//=====================
	function name(){
	}
	$(document).ready(name);
	$(window).resize(name);


$(document).ready(function(){
	//index page 
	//=====================
   	$('.logo-panel ul li a').click(function(){
		var titlename = $(this).attr('title')
		//alert($('#'+titlename).offset.top)
		$('body, html').animate({
			"scrollTop": $('#'+titlename).offset().top - 50
		});
	});
  
    $('.btn-cart').click(function(){
		$('.item-added').fadeIn().delay(4000).fadeOut();
	});
    $('.item-cart-number-panel').hover(function(){
		$('.cart-all-item').stop(true,true).slideDown();
	},function(){
		$('.cart-all-item').stop(true,true).slideUp();
	});
});
