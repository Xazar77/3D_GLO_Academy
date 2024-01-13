const slider = ({sliderBlockClass, slidesClass, dotsBlockClass, activeSlide, activeDot}) => {

	const sliderBlock = document.querySelector(sliderBlockClass)
	const slides = sliderBlock.querySelectorAll(slidesClass)
	const dotsBlock = sliderBlock.querySelector(dotsBlockClass)
	
	const timerInterval = 2000

	let slideIndex = 0
	let intervalId = null
	

	const createDots = () => {
		dotsBlock.innerHTML = ''
		slides.forEach(slide => {
			const li = document.createElement('li')
			li.classList.add('dot')
			dotsBlock.append(li)
			
		})
		const dots = document.querySelectorAll('.dot')
		dots[slideIndex].classList.add(activeDot)
		
	}
	createDots()
	

	const prevSlide = (elems, index, activeClass) => {
		elems[index].classList.remove(activeClass)

	}


	const nextSlide = (elems, index, activeClass) => {
		elems[index].classList.add(activeClass)

	}


	const autoplaySlides = () => {
		const dots = dotsBlock.querySelectorAll('.dot')
		
		prevSlide(slides, slideIndex, activeSlide)
		prevSlide(dots, slideIndex, activeDot)
		slideIndex++
		if(slideIndex >= slides.length) {
			slideIndex = 0
		}
		nextSlide(slides, slideIndex, activeSlide)
		nextSlide(dots, slideIndex, activeDot)


	}

	const startSlides = (timer = 1000) => {
		intervalId = setInterval(autoplaySlides, timer)
	}

	const stopSlides = () => {
		clearInterval(intervalId)
	}

	sliderBlock.addEventListener('click', (e) => {
		e.preventDefault()
		const dots = dotsBlock.querySelectorAll('.dot')
		

		if(!e.target.matches('.dot, .portfolio-btn')) {
			return
		}

		prevSlide(slides, slideIndex, activeSlide)
		prevSlide(dots, slideIndex, activeDot)

		if(e.target.matches('#arrow-right')) {
			slideIndex++
		} else if(e.target.matches('#arrow-left')) {
			slideIndex--
		} else if (e.target.classList.contains('dot')) {

			dots.forEach((dot, i) => {
				if(e.target === dot) {
					slideIndex = i

				}

			})
		}

		if(slideIndex >= slides.length) {
			slideIndex = 0
		}
		if(slideIndex < 0) {
			slideIndex = slides.length - 1
		}

		nextSlide(slides, slideIndex, activeSlide)
		nextSlide(dots, slideIndex, activeDot)
	})

	sliderBlock.addEventListener('mouseenter', (e) => {
		if(e.target.matches('.dot, .portfolio-btn')) {
			stopSlides()
		}
	}, true)

	sliderBlock.addEventListener('mouseleave', (e) => {
		if(e.target.matches('.dot, .portfolio-btn')) {
			startSlides(timerInterval)
		}
	}, true)



	startSlides(timerInterval)
}

export default slider