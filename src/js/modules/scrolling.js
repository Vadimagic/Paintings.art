const scrolling = (upSelector) => {
	const upElem = document.querySelector(upSelector);

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 1650) {
			upElem.classList.remove('fadeOut');
			upElem.classList.add('animated', 'fadeIn');
		} else {
			upElem.classList.remove('fadeIn');
			upElem.classList.add('fadeOut');
		}
	});
};

export default scrolling;