// import checkNumInputs from './checkNumInputs'

const forms = () => {
	const form = document.querySelectorAll("form"),
			input = document.querySelectorAll("input"),
			upload = document.querySelectorAll('[name="upload"]')

	// checkNumInputs('input[name="user_phone"]')

	const message = {
		loading: "Загрузка",
		success: "Спасибо! Мы с вами свяжемся!",
		failure: "Произошла ошибка",
		spinner: "./assets/img/spinner.gif",
		ok: "./assets/img/ok.png",
		fail: "./assets/img/fail.png"
	};

	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php'
	};

	const postData = async (url, data) => {
		let result = await fetch(url, {
			method: "POST",
			body: data,
		});

		return await result.text()
	};

	const clearinputs = () => {
		input.forEach(item => {
			item.value = "";
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = "Файл не выбран";
		})
	};

	upload.forEach(item => {
		item.addEventListener('input', () => {
			const arrName = item.files[0].name.split(".");
			let dots = arrName[0].length > 7 ? "..." : ".";
			const name = arrName[0].substring(0, 8) + dots + arrName[1];

			item.previousElementSibling.textContent = name;
		})
	});

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			item.classList.add('animated', 'fadeOutUp');
			
			setTimeout(() => {
				item.style.display = "none"
			}, 200);

			let statusImg = document.createElement("img");
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeinUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage)

			const formData = new FormData(item);
			const api = item.closest('.popup-design') || item.classList.contains('calc_form') ? path.designer :  path.question;
			console.log(api);

			postData('assets/server.php', formData)
				.then((res) => {
					console.log(res)
					statusImg.setAttribute('src', message.ok)
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail)
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearinputs();
					setTimeout(() => {
						statusMessage.remove();
						item.classList.remove('fadeOutUp');
						item.classList.add('fadeIn');
						item.style.display = ""
					}, 4000);
				})
		})
	})
};

export default forms