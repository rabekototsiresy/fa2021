(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();


})(jQuery);
$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});



function slide(){
	let section1 = document.querySelector('.section1');
	let section2 = document.querySelector('.section2');
	let btnNext = document.querySelector('.next');

	btnNext.addEventListener('click',function (){
		section1.innerHTML = section2.innerHTML;
		let section3 = document.querySelector('.section3');
		section1.style.padding = '20px';
		section3.style.display = 'flex'
		section2.innerHTML = section3.innerHTML;
		let section4 = document.querySelector('.section4');

		section3.innerHTML = section4.innerHTML;
	})

}

slide()