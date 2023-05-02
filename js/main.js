$(document).ready(function () {
    "use strict";

	const inViewport = (elem) => {
        let allElements = document.getElementsByClassName(elem);
        let windowHeight = window.innerHeight;
        const elems = () => {
            for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
                let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
                let top = viewportOffset.top + 200;  //  get the offset top
                if(top < windowHeight){  //  if the top offset is less than the window height
                    allElements[i].classList.add('animation');  //  add the class
                } else{
                    allElements[i].classList.remove('in-viewport');  //  remove the class
                }
            }
        }
        elems();
        window.addEventListener('scroll', elems);
    }

    inViewport("anime");

	$(".header_block_btn").click(function() {
		$(this).toggleClass("active");
		$(".header_drop").slideToggle();
		$(".main").toggleClass("open");
		$(".about_main").toggleClass("open");
		$(".properties_single").toggleClass("open");
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
		cssEase: 'linear',
		speed: 500,
		infinite: true,
		centerMode: true,
		variableWidth: true,
		dots: false,
		arrows: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				speed: 500,
			}
		}]
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

	$('.gallery_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		fade: true,
		arrows: false
	});

	$('.properties_single_wrap_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		speed: 600,
		autoplaySpeed: 1500,
		infinite: true,
		dots: true,
		prevArrow: $('.properties_single_wrap_prev'),
        nextArrow: $('.properties_single_wrap_next')
	});

	$(".amenities_nav_item").click(function() {
		$(".amenities_nav_item").removeClass("active");
		$(this).addClass("active");
		var attr = $(this).attr("data-target");
		$(".amenities_block_item").removeClass("active");
		$(`#${attr}`).addClass("active");
	});

	$(".properties_mob_filter_top").click(function() {
		$(this).toggleClass("active");
		$(".properties_mob_filter_body").slideToggle();
	});

});