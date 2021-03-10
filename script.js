setInterval(clockCalc, 1000)

const secondsHand = document.querySelector('[JS-second-hand]')
const minutesHand = document.querySelector('[JS-minute-hand]')
const hoursHand = document.querySelector('[JS-hour-hand]')

function clockCalc() {
	const currentDate = new Date()
	const secondsCalc = currentDate.getSeconds() / 60
	const minutesCalc = (secondsCalc + currentDate.getMinutes()) / 60
	const hoursCalc = (minutesCalc + currentDate.getHours()) / 12
	setRotation(secondsHand, secondsCalc)
	setRotation(minutesHand, minutesCalc)
	setRotation(hoursHand, hoursCalc)
}

function setRotation(element, rotationCalc) {
	element.style.setProperty('--rotation', rotationCalc * 360)
}

clockCalc()
