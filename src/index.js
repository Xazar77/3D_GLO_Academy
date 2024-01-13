import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import validForm from './modules/validForm'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendForm from './modules/sendForm'
import { swiper } from './modules/swiper'

// timer('22 june 2024')
timer('26 january 2024 16:10:00.000')
menu()
modal()
calc(100)
validForm()
tabs()
slider({
	sliderBlockClass: '.portfolio-content',
	slidesClass: '.portfolio-item',
	dotsBlockClass: '.portfolio-dots',
	activeSlide: 'portfolio-item-active',
	activeDot: 'dot-active'
})
sendForm({
	formsId:['form1', 'form2', 'form3'],
	someElem: [
		{
			type: 'block',
			id: 'total'
		}
	]

})
swiper()