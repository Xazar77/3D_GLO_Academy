const tabs = () => {
	const tabPanel = document.querySelector('.service-header')
	const tabs = tabPanel.querySelectorAll('.service-header-tab')
	const tabContent = document.querySelectorAll('.service-tab')

	tabPanel.addEventListener('click', (e) => {
		const tabBtn = e.target.closest('.service-header-tab')
		tabs.forEach((btn, idx) => {
			if(btn === tabBtn) {
				btn.classList.add('active')
				tabContent[idx].classList.remove('d-none')
			} else {
				btn.classList.remove('active')
				tabContent[idx].classList.add('d-none')
			}
		})
	})
}

export default tabs