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

	const element = document.documentElement,
			body = document.body;

	const calcScroll = () => {
		upElem.addEventListener('click', function(e) {
			let scrollTop = Math.round(body.scrollTop || element.scrollTop);
			console.log(this)
			if (this.hash !== '') {
				e.preventDefault();
				let hashElement = document.querySelector(this.hash),
					 hashElementTop = 0;
				
				while (hashElement.offsetParent) {
					hashElementTop += hashElement.offsetTop;
					hashElement = hashElement.offsetParent;
				}

				hashElementTop = Math.round(hashElementTop);
				smoothScroll(scrollTop, hashElementTop, this.hash);
			}
		});
	}

	const smoothScroll = (from, to, hash) => {
		console.log(from, to, hash)
		let timeInterval = 7,
			prevScrollTop,
			speed;

		if (to > from) {
			spedd = 0.03;
		} else {
			speed = -0.03;
		}

		let move = setInterval(() => {
			let scrollTop = Math.round(body.scrollTop || element.scrollTop);
			console.log(prevScrollTop)
			console.log(scrollTop)
			if (
					prevScrollTop === scrollTop ||
					(to > from && scrollTop >= to) ||
					(to < from && scrollTop <= to)
			) {
				clearInterval(move);
				history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
			} else {
				body.scrollTop += scrollTop * speed + speed * 100;
				element.scrollTop += scrollTop * speed + speed * 100;
				prevScrollTop = scrollTop;
			}
		}, timeInterval)
	};

	calcScroll();
};

export default scrolling;