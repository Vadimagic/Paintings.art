const modals = () => {
	let btnPressed = false;

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

		const trigger = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				windows = document.querySelectorAll('[data-modal'),
				scroll = calcScroll(),
				gift = document.querySelector('.fixed-gift');

		trigger.forEach(item => {
			item.addEventListener("click", (e)=> {
				if (e.target) {
					e.preventDefault();
				}

				if (destroy) {
					item.remove();
				}

				btnPressed = true;

				windows.forEach(item => {
					item.style.display = 'none'
					item.classList.add("animated", "fadeIn")
				})
	
				modal.style.display = "block";
				document.body.style.overflow = "hidden"
				document.body.style.marginRight = `${scroll}px`;
				gift.style.marginRight = `${scroll}px`;
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = "none"
			document.body.style.overflow = ""
			document.body.style.marginRight = `0px`;
			gift.style.marginRight = `0px`;
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {

				windows.forEach(item => {
					item.style.display = 'none'
				})

				modal.style.display = "none"
				document.body.style.overflow = ""
				document.body.style.marginRight = `0px`;
				gift.style.marginRight = `0px`;
			}
		})
	}

	function showModalByTime(selector, time) {
		const scroll = calcScroll()
		
		setTimeout(() => {
			let display;
			document.querySelectorAll('[data-modal]').forEach((item) => {
				if (getComputedStyle(item).display !== 'none') {
					display = "block"
				}
			})

			if (!display) {
				document.querySelector(selector).style.display = "block"
				document.body.style.overflow = "hidden"
				document.body.style.marginRight = `${scroll}px`;
			}
			
		}, time)
	}

	function calcScroll() {
		let div = document.createElement('div')

		div.style.cssText = "width: 50px; height: 50px; overflow-y: scroll; visibility: hidden";

		document.body.appendChild(div)
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth
	}

	function openByScroll(selector) {
		window.addEventListener('scroll', () => {
			const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - 1

			if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
				btnPressed = true;
				document.querySelector(selector).style.display = 'block'
			}
		})
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

	showModalByTime('.popup-gift', 600000)

	openByScroll('.popup-consultation')
};

export default modals;