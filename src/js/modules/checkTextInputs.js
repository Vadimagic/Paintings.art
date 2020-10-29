const checkTextInputs = (selector) => {
	const txtInputs = document.querySelectorAll(selector)

	txtInputs.forEach(input => {
		input.addEventListener('keypress', (e) => {
			if (e.key.match(/[^a-яё 0-9]/ig)) {
				e.preventDefault()
			}
		})
	})
};

export default checkTextInputs;