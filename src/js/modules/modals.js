const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				windows = document.querySelectorAll('[data-modal'),
				scroll = calcScroll();

		trigger.forEach(item => {
			console.log(scroll)
			item.addEventListener("click", (e)=> {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = 'none'
				})
	
				modal.style.display = "block";
				document.body.classList.add('modal-open');
				document.body.style.marginRight = `${scroll}px`;
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = "none"
			document.body.classList.remove('modal-open')
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {

				windows.forEach(item => {
					item.style.display = 'none'
				})

				modal.style.display = "none"
				document.body.classList.remove('modal-open')
			}
		})
	}

	function calcScroll() {
		let div = document.createElement('div')

		div.style.cssText = "width: 50px; height: 50px; overflowY: scroll; visibility: hidden";

		document.body.appendChild(div)
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
};

export default modals;