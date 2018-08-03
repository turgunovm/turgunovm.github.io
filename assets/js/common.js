function hideLoadingLayer(){
document.getElementById("loading_layer").style.visibility="hidden";
}

$('.menu__link').on('click', function(e) {

	e.preventDefault;
	$(this).toggleClass('menu__link--active');
	$('.nav').toggleClass('visible');
	$('.masthead').on('click', function() {
		removeClass('.menu__link--active');
	});
});

var typed = new Typed('.typed', {
    strings: [' ', '<strong>Developer</strong>', '<strong>Muhiddin</strong>'],
    typeSpeed: 100,
		startDelay: 1000,
		cursorChar: '_',
    backSpeed: 80,
		smartBackspace: false,
    loop: false
  });
