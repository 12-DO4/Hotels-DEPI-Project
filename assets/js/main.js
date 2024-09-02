////////////////////////////////////////////////////
	// 16. Swiper Js
	const destiNationswiper = new Swiper('.it-destination-slider-active', {
		speed: 1000,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

	});


	

	////////////////////////////////////////////////////
	// 19. Swiper Js
	const destiNation2swiper = new Swiper('.it-destination-2-active', {
		speed: 1000,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.destination-2-prev',
			nextEl: '.destination-2-next',
		}

	});
