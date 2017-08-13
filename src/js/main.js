$(function () {
	$('.js-slick').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 3
				}
			}
		]
	});
	
	$('.js-hamburger').on('click', function () {
		toggleHamburger();
	});
	
	$('.js-header__menu').on('click', function (e) {
		if(e.target === this) {
			toggleHamburger();
		}
	});

	function toggleHamburger() {
		$('.js-hamburger').toggleClass('hamburger_open');
		$('body').toggleClass('overflow')
	}
});