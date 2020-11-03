const scrolling = () => {
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 1650) {
			while (document.documentElement.scrollTop > 0) {
				console.log(document.documentElement.scrollTop)
				setTimeout(() => document.documentElement.scrollTop = document.documentElement.scrollTop - 1, 100);
			}
		}
	});
};

export default scrolling;