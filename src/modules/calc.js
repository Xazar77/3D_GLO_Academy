import { animate } from "./helpers"


const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block')
	const calcType = calcBlock.querySelector('.calc-type')
	const calcSquare = calcBlock.querySelector('.calc-square')
	const calcCount = calcBlock.querySelector('.calc-count')
	const calcDay = calcBlock.querySelector('.calc-day')
	const total = document.getElementById('total')
	const inputs = calcBlock.querySelectorAll('input')

	let totalValue = 0
	let interval
	

	inputs.forEach(input => {
		input.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/g, '')
			
		})
	})


	const countCalc = () => {
		const calcTypeValue = +calcType.options[calcType.selectedIndex].value
		const calcSquareValue = calcSquare.value

		let calcCountValue = 1
		let calcDayValue = 1

		if(calcCount.value > 1) {
			calcCountValue += +calcCount.value/10
		}

		if(calcDay.value && calcDay.value < 5) {
			calcDayValue = 2
		}else if(calcDay.value && calcDay.value < 10) {
			calcDayValue = 1.5
		}

		if(calcType.value && calcSquare.value) {
			totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
			
		} else {
			totalValue = 0
		}
		 
		return totalValue

	}

	calcBlock.addEventListener('input', (e) => {
		if(e.target === calcType || e.target === calcCount ||
			e.target === calcSquare || e.target === calcDay) {
				clearInterval(interval)
				countCalc()

				// 1 вариант пересчёта


                if (totalValue != 0) {
                  
                    interval = setTimeout(() => {
                        animate({
                            duration: 1000,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                               total.textContent = Math.round(progress * totalValue) + ' руб';
                            }
                        });
                    },200);
                }

				// 2 вариант пересчёта

				
				// let startValue = 0
				// let counter = setInterval(() => {
				// 	if(calcType.value && calcSquare.value ) {
				// 		startValue +=1
				// 		total.textContent = startValue + ' руб'
				// 	}
				// 	if(startValue === totalValue) {
				// 		clearInterval(counter)
				// 	}
				// }, 5)
			}
	})
}

export default calc