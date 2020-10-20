const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				windows = document.querySelectorAll('[data-modal'),
				scroll = calcScroll();

		console.log(scroll)

		trigger.forEach(item => {
			item.addEventListener("click", (e)=> {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = 'none'
				})
	
				modal.style.display = "block";
				document.body.style.overflow = "hidden"
				document.body.style.marginRight = `${scroll}px`;
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = "none"
			document.body.style.overflow = ""
			document.body.style.marginRight = `0px`;
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {

				windows.forEach(item => {
					item.style.display = 'none'
				})

				modal.style.display = "none"
				document.body.style.overflow = ""
				document.body.style.marginRight = `0px`;
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

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

	showModalByTime('.popup-consultation', 600)
};

export default modals;