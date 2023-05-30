$(document).ready(function() {
	var slider = $("#slider").bxSlider({
	  auto: true,
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 250,
	  slideMargin: 10,
	  randomStart: true,
	  moveSlides: 1,
	  pause: 3000,
	  pager: true, // Add the pagerCustom option with the pager element selector
	  pagerType: 'short',
	  pagerCustom: "#pager"
	});
  });
  