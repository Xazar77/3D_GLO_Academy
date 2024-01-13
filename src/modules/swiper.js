import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules'


export const swiper = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Autoplay],
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},	
		breakpoints: {
			640: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 40,
			},
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 50,
			},
		  },
	})
}