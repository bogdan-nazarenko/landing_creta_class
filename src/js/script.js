const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 40,
	slidesPerGroup: 3,
	navigation: {
		prevEl: '.btn__slider--prev',
		nextEl: '.btn__slider--next',
	},
	pagination: {
		el: '.slider__pag',
		clickable: true,
	},
});

const supAll = document.querySelectorAll('.tab__sup');
const tabAll = document.querySelectorAll('.tab');

supAll.forEach((elem, index) => {
	elem.addEventListener('click', function () {
		if (!supAll[index].classList.contains('sup--active')) {
			supAll.forEach(elem => {
				elem.classList.remove('sup--active');
			});
		}
		if (!tabAll[index].classList.contains('tab--show')) {
			tabAll.forEach(elem => {
				elem.classList.remove('tab--show');
			});
		}
		supAll[index].classList.add('sup--active');
		tabAll[index].classList.add('tab--show');
	});
});