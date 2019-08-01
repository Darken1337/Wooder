jQuery(document).ready(function($) {
	
	//Ad remover

	document.querySelector('div').style.display = 'none';
	document.getElementsByClassName('cbalink')[0].style.display = 'none';

	const adaptiveMenuInit = function(){
		const hamburger = $('#menuHamburger'),
		      menuAdaptive = $('#menuAdaptive'),
		      menuClose = $('#menuAdaptiveClose');

		hamburger.on('click', () => {

		    menuAdaptive.addClass('header-menu-adaptive-wrapper--active')

		})

		menuClose.on('click', () => {

		  menuAdaptive.removeClass('header-menu-adaptive-wrapper--active')

		})
	}

	const toggleLanguageButton = function(){
		const languageButton = $('.menu-side__active'),
			  dropDown = $('.menu-side__language-drop'),
			  menuChoises = document.querySelectorAll('.menu-side__choise'),
			  buttonWrapper = $('.menu-side__language');

		const activeClass = 'menu-side__language--active';

		const setActiveLanguage = function(e){
			let currentLang = e.target.innerText,
				prevLang = languageButton.text();

			languageButton.text(currentLang);
			e.target.innerText = prevLang;
			dropDown.slideToggle(400);
		}

		menuChoises.forEach(item => {
			item.addEventListener('click', setActiveLanguage);
		})

		languageButton.on('click', function(e){
			if ( !buttonWrapper.hasClass( activeClass ) ) {
				buttonWrapper.addClass( activeClass );
			}else {
				buttonWrapper.removeClass( activeClass );
			}
			e.stopPropagation();
			dropDown.slideToggle(400);
		})


	}

	const switchScrollText = function(){
		if(window.innerWidth < 1024){
			$('.scroll__description').text('Swipe');
		}else {
			$('.scroll__description').text('Scroll');
		}
	}

	window.addEventListener('resize', switchScrollText);

	switchScrollText();

	adaptiveMenuInit();
	toggleLanguageButton();

});















