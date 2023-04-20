$(document).ready(function () {
    "use strict";

	$(".header_block_burger").click(function() {
		$(this).toggleClass("active");
	});

	$('.featured_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 1500,
		prevArrow: $('.featured_nav_arrows_left'),
        nextArrow: $('.featured_nav_arrows_right')
	});

	$('.neighborhoods_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 1500,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		dots: false,
        nextArrow: $('.neighborhoods_wrap_next')
	});

	$('.testimonials_mob').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		prevArrow: $('.testimonials_mob_arrows_prev'),
        nextArrow: $('.testimonials_mob_arrows_next')
	});

	$('.testimonials_desk').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		prevArrow: $('.testimonials_desk_arrows_prev'),
        nextArrow: $('.testimonials_desk_arrows_next')
	});

	$('.blog_block_left').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
		fade: true,
  		autoplaySpeed: 1500
	});

});