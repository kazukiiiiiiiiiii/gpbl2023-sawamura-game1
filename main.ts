radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("GAMEOVER")
        basic.pause(10500)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("GAMEOVER")
        basic.pause(10500)
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showString("GAMEOVER")
        basic.pause(10500)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    y = y - 1
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    y = y + 1
})
radio.onReceivedValue(function (name, value) {
	
})
let y = 0
let judge = 0
radio.setGroup(39)
let x = 2
y = 4
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, y)
    if (x < 0) {
        x = 0
    }
    if (x > 4) {
        x = 4
    }
    if (y < 0) {
        y = 0
    }
    if (y > 4) {
        y = 4
    }
})
