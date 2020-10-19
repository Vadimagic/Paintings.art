const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
				modal = document.querySelector(modalSelector),
				close = document.querySelector(closeSelector),
				windows = document.querySelectorAll('[data-modal');

		trigger.forEach(item => {
			item.addEventListener("click", (e)=> {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = 'none'
				})
	
				modal.style.display = "block";
			});
		})

		close.addEventListener('click', () => {
			modal.style.display = "none"
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {

				windows.forEach(item => {
					item.style.display = 'none'
				})

				modal.style.display = "none"
			}
		})
	}

	function showModalByTime(selector, time) {
		
		setTimeout(() => {
			let display;
			document.querySelectorAll('[data-modal]').forEach((item) => {
				if (getComputedStyle(item).display !== 'none') {
					display = "block"
				}
			})

			if (!display) {
				document.querySelector(selector).style.display = "block"
				document.querySelector(selector).classList.add('modal-open')
			}
			
		}, time)
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

	showModalByTime('.popup-consultation', 60000)
};

export default modals;