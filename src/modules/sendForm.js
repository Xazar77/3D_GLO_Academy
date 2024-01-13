import { validate } from "./helpers" 

const sendForm = ({formsId , someElem = []}) => {
	
	formsId.forEach(formId => {
		const form = document.getElementById(formId)
		const formElems = form.querySelectorAll('input')
		validate(formElems)
		
		
		const statusBlock = document.createElement('div')
		const loadedText = 'Загрузка....'
		const errorText = 'Ошибка.....'
		const successText = 'Спасибо! Наш менеджер свяжется свами!!!'


		const sendData = (data) => {
			return fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json"
				}
			}).then(res => res.json())
			
		}
	
	
	
		const submitForm = (form) => {
			
			const formElems = form.querySelectorAll('input')
			const formData = new FormData(form)
			const formBody = {}
			
			form.append(statusBlock)
			statusBlock.textContent = loadedText
	
	
			formData.forEach((val, key) => {
				formBody[key] = val
			})
			
			someElem.forEach(elem => {
				const element = document.getElementById(elem.id)
				
				if(elem.type === 'block') {
					formBody[elem.id] = element.textContent
				} else if(elem.type === 'input') {
					formBody[elem.id] = element.value
				}
			})
			

	
			if(validate(formElems)) {
				sendData(formBody).then(data => {
					formElems.forEach(input => {
						input.value =''
						input.style.border = ''
					})
					statusBlock.textContent = successText
				})
				.catch(error => {
					console.error(error.message)
					statusBlock.textContent = errorText
				})
			}else {
				alert('Данные не валидны!!!!')
			}
		}
		try{
			if(!form) {
	
				throw new Error('Верните форму!!!')
			}
			
			form.addEventListener('submit', (e) => {
				e.preventDefault()
				submitForm(form)
			})
			
		}catch(error){
			console.log(error.message)
		}
	})
}

export default sendForm