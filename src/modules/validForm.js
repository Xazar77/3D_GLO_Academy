const validForm = () => {
	const nameInputs = document.querySelectorAll('input[name=user_name]')
	const phoneInputs = document.querySelectorAll('input[name=user_phone]')
	const emailInputs = document.querySelectorAll('input[name=user_email]')
	const messageInput = document.getElementById('form2-message')
	

	nameInputs.forEach(nameInput => {
		nameInput.addEventListener('blur', (e) => {
			e.target.value = (e.target.value.split(/\s+/g).map(word => word[0].toUpperCase() + word.substring(1)).join(' '))
			.replace(/[^а-яА-Я-\ ]+/g, '')
			.replace(/(\-)+/g, '-')
			.replace(/(\ )+/g, ' ')
			.replace(/(\-)$/g, '')
			.replace(/(\ )$/g, '')

		})
	})

	//string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')

	phoneInputs.forEach(phoneInput => {
		phoneInput.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^\d\(\)\-\+]+/g, '')
		})
	})

	emailInputs.forEach(emailInput => {
		emailInput.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-\_\.!~\*\']+/g, '')
		})
	})

	messageInput.addEventListener('input', (e) => {
		e.target.value = (e.target.value.slice(0,1).toUpperCase() + e.target.value.slice(1).toLowerCase())
		.replace(/[^а-яА-Я0-9\-\ \.\,\!]+/g, '')
		
		// .replace(/(\-)+/g, '-')
		// .replace(/(\ )+/g, ' ')
		// .replace(/(\-)$/g, '')
		// .replace(/(\ )$/g, '')

	})


}

export default validForm