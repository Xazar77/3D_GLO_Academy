const timer = (deadline) => {
	const timerAction = document.querySelector('.timer-action')
	const timerDays = document.getElementById('timer-days')
	const timerHours = document.getElementById('timer-hours')
	const timerMinutes = document.getElementById('timer-minutes')
	const timerSeconds = document.getElementById('timer-seconds')
	
	let timerId


	
	
	const getZero = (num) => {
		if(num >= 10){
			return num
		} else if( num < 10) {
			return '0' + num
		}
	}
	
	
	
	
	const getTimeRemaining = () => {
		let currentTime = new Date().getTime()
		let stopTime = new Date(deadline).getTime()
		let timeRemaining = (stopTime - currentTime) / 1000
		let days = Math.floor(timeRemaining / 60 / 60 / 24)
		let hours = Math.floor((timeRemaining / 60 / 60) % 24)
		let minutes = Math.floor((timeRemaining / 60) % 60)
		let seconds = Math.floor(timeRemaining % 60)

		return {
			timeRemaining,
			days,
			hours,
			minutes,
			seconds
		}
	}
	

		
	const updateClock = () => {
		let getTime = getTimeRemaining()
		let {timeRemaining, days, hours, minutes, seconds} = getTime

		if(timeRemaining > 0) {
			timerDays.textContent = getZero(days)
			timerHours.textContent = getZero(hours)
			timerMinutes.textContent = getZero(minutes)
			timerSeconds.textContent = getZero(seconds)
		} 	
	}
	updateClock()
	
	timerId = setInterval(() => {
		let getTime = getTimeRemaining()
		if(getTime.timeRemaining > 0) {
			updateClock()
		} else {
			timerAction.textContent = 'Акция закончилась!!!'
			clearInterval(timerId)
		}
	}, 500)

}
export default timer