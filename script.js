setInternal(setClock, 1000)

const secondsHand = document.querySelector('[JS-second-hand]')
const minutesHand = document.querySelector('[JS-minute-hand]')
const hoursHand = document.querySelector('[JS-hour-hand]')
function setClock() {
	const currentDate = new Date()
	const secondsCalc = currentDate.getSeconds() / 60
	const minutesCalc = (secondsHand + currentDate.getMinutes()) / 60
	const hoursCalc = (minutesHand + currentDate.getHour()) / 12
	setRotation(secondsHand, secondsCalc)
	setRotation(minutesHand, minutesCalc)
	setRotation(hoursHand, hoursCalc)
}

function setRotation(element, rotationCalc) {
	element.style.setProperty('--rotation', rotationCalc * 360)
}
