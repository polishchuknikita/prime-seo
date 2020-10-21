$(function () {
	// Header fixed
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		$('.prime-header').addClass("scroll");
		}
		else{
		$('.prime-header').removeClass("scroll");
		}
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		$('.prime-offer-slider').addClass("scroll");
		}
		else{
		$('.prime-offer-slider').removeClass("scroll");
		}
	});	

	// Menu
	$('.prime-hamburger').click( function(){
		$('.prime-header-bottom-nav__list').toggleClass('d-none');
		$('.prime-header-bottom-nav__list').toggleClass('mobile-menu');
		$('.prime-hamburger').toggleClass('active');
	});

	// Slider offer
	if($('.prime-offer-slider__list').length) {
	    $('.prime-offer-slider__list').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 4600,
			speed: 1600,
			pauseOnHover: false,
			fade: true,
  			cssEase: 'linear',
			prevArrow:'<button type="button" class="slick-prev"><div class="slick-prev-border"></div></button>',
			nextArrow:'<button type="button" class="slick-next"><div class="slick-next-border"></div></button>',
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        arrows: false
			      }
			    }
			  ]
		});
	};

	// Slider clients
	if($('.prime-clients-slider').length) {
		$('.prime-clients-slider').slick({
			dots: false,
			autoplay: true,
			autoplaySpeed: 600,
			speed: 1200,
			pauseOnHover: false,
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			adaptiveHeight: true,
			prevArrow:'<button type="button" class="slick-prev"><div class="slick-clients-prev-border"></div></button>',
			nextArrow:'<button type="button" class="slick-next"><div class="slick-clients-next-border"></div></button>',
			  responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 5
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 575,
			      settings: {
			        slidesToShow: 2
			      }
			    }
			  ]
		});
	};

	// Validate prime-modal-window-first
	$('.prime-modal-window-first').validate({
		messages: {
		 name: {
		 required: "Вы пропустили поле!"
		 },
		 email: {
		 required: "Вы пропустили поле!",
		 email: "Просьба указать корректный адрес электронной почты. Пример верного формата: primer@prime-seo.ru"
		 },
		 phone: {
		 	required: "Вы пропустили поле!",
		 }
		}
	});

	// Prime-stages
	$('input[name="prime-stages-radio"]').click(function(){
		var target = $('#prime-stages-text-' + $(this).val());
	 
		$('.prime-stages-list__info').not(target).hide(0);
		target.fadeIn(500);
	});

	// Modal first
	$('.btn-buy').click(function (e) {
		e.preventDefault();
		$('#modal-first').arcticmodal();
	});

	// Modal second
	$('.btn-call-me').click(function (e) {
		e.preventDefault();
		$('#modal-second').arcticmodal();
	});

	// Dynamic input in first modal
	$('.vk').click(function() { 
	  $('#form-window-first-radio').prop('checked', true);
	});

	// Prime-complete-work-list
	if($('.prime-complete-work-list').length) {
		$('.prime-complete-work-list').slick({
			dots: false,
			autoplay: true,
			autoplaySpeed: 600,
			speed: 800,
			pauseOnHover: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			fade: true,
  			cssEase: 'linear',
			prevArrow:'<button type="button" class="slick-prev"><div class="slick-clients-prev-border"></div></button>',
			nextArrow:'<button type="button" class="slick-next"><div class="slick-clients-next-border"></div></button>'
		});
	};

	// Prime-complete-work-2-list
	if($('.prime-complete-work-2-list').length) {
		$('.prime-complete-work-2-list').slick({
			dots: false,
			autoplay: false,
			autoplaySpeed: 1200,
			speed: 800,
			pauseOnHover: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			prevArrow:'<button type="button" class="slick-prev"><div class="slick-clients-prev-border"></div></button>',
			nextArrow:'<button type="button" class="slick-next"><div class="slick-clients-next-border"></div></button>'
		});
	};

});

// Menu 
	let isMobile = {
		Android: function() {return navigator.userAgent.match(/Android/i);},
		BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
		iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
		Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
		Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
		any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
	};

			let body=document.querySelector('body');
	if(isMobile.any()){
		body.classList.add('touch');
		$('.prime-header-bottom-nav__item-first > .prime-header-bottom-nav__border').click( function() {
			$('.prime-header-bottom-nav__item-first').toggleClass('prime-menu-active');
		});
		$('.prime-header-bottom-nav__item-second > .prime-header-bottom-nav__border').click( function() {
			$('.prime-header-bottom-nav__item-second').toggleClass('prime-menu-active');
		});
		$('.prime-header-bottom-nav__item-third > .prime-header-bottom-nav__border').click( function() {
			$('.prime-header-bottom-nav__item-third').toggleClass('prime-menu-active');
		});
		$('.prime-header-bottom-nav__item-fourth > .prime-header-bottom-nav__border').click( function() {
			$('.prime-header-bottom-nav__item-fourth').toggleClass('prime-menu-active');
		});
		$('.prime-header-bottom-nav__item-fifth > .prime-header-bottom-nav__border').click( function() {
			$('.prime-header-bottom-nav__item-fifth').toggleClass('prime-menu-active');
		});
		$('.prime-header-bottom-nav__item-sixth > .prime-header-bottom-nav__border').click( function() {
			$('.prime-header-bottom-nav__item-sixth').toggleClass('prime-menu-active');
		});
	}else{
		body.classList.add('mouse');
	}
