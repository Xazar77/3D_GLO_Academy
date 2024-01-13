import {handleButtonClick} from './helpers'


const menu = () => {
	const menuList = document.querySelector('menu')
	const closeBtn = menuList.querySelector('.close-btn')
	const menuItems = menuList.querySelectorAll('ul > li > a')
	const menuBtn = document.querySelector('.menu')

	const showMenu = () => {
		menuList.classList.toggle('active-menu')
	}

	menuBtn.addEventListener('click', showMenu)
	closeBtn.addEventListener('click', showMenu)

	menuItems.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault()
			showMenu()
			handleButtonClick(item)

		})
	})

}
 
export default menu