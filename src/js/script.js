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
				elem.classList.remove('auto--height');
			});
		}
		supAll[index].classList.add('sup--active');
		tabAll[index].classList.add('tab--show');
		setTimeout(() => {
			tabAll[index].classList.add('auto--height');
		}, 1000);
	});
});

const accrSup = document.querySelectorAll('.accr__sup');
const accrBtnAll = document.querySelectorAll('.accr__btn');
const accrAll = document.querySelectorAll('.accr__text');

accrSup.forEach((elem, index) => {
	elem.addEventListener('click', function () {
		if (accrAll[index].classList.contains('accr--show')) {
			accrBtnAll[index].classList.remove('btn--open');
			accrAll[index].classList.remove('accr--show');
		} else {
			accrBtnAll.forEach(elem => {
				elem.classList.remove('btn--open');
			});
			accrAll.forEach(elem => {
				elem.classList.remove('accr--show');
			});
			accrBtnAll[index].classList.add('btn--open');
			accrAll[index].classList.add('accr--show');
		}
	});
});