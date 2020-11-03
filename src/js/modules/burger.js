const burger = (burgerSelector, menuSelector) => {
	const burgerElem = document.querySelector(burgerSelector),
			menuElem = document.querySelector(menuSelector);

	menuElem.style.display = 'none';
	menuElem.classList.add('animated', 'fadeInDown');

	burgerElem.addEventListener('click', () => {
		console.log(window.screen.availWidth)
		console.log(document.querySelector('body').style)
		if (menuElem.style.display === 'none' && window.screen.availWidth <= 992) {
			menuElem.style.display = 'block';
		} else {
			setTimeout(() => menuElem.style.display = 'none', 400)
		}
	});

	window.addEventListener('resize', () => {
		if (window.screen.availWidth > 992) {
			menuElem.style.display = 'none';
		}
	});
};

export default burger;