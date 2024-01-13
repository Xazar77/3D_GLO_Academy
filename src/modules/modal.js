
const modal = () => {
	const modalBtns = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	
	modal.style.opacity = '0'
	modal.style.transition = `opacity 1s ease-out`
	
	
	const showModal = () => {
		modal.style.display = 'block'
		if(screen.width > 768) {
			setTimeout(() => {
				modal.style.opacity = '1'
			}, 1000)
		} else {
			modal.style.opacity = '1'
		}
	}
	const closeModal = () => {
		modal.style.opacity = '0'
		if(screen.width > 768) {
			setTimeout(() => {
				modal.style.display = 'none'
			}, 2000)
		} else {
			modal.style.display = 'none'
		}
	}

	modalBtns.forEach(btn => {
		btn.addEventListener('click', showModal)
	})
	modal.addEventListener('click', (e) => {
		if(e.target.matches('.popup-close') || e.target.matches('.popup')) {
			closeModal()
		}
	})
	

}

export default modal