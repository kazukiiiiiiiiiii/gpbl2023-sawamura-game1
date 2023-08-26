radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.A)) {
        judge = 1
    } else if (input.buttonIsPressed(Button.B)) {
        judge = 1
        basic.showString("GAMEOVER")
        basic.pause(10500)
    } else if (input.buttonIsPressed(Button.AB)) {
        judge = 1
        basic.showString("GAMEOVER")
        basic.pause(10500)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    y = y - 1
})
input.onButtonPressed(Button.B, function () {
    y = y + 1
})
let y = 0
let judge = 0
judge = 0
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
        if (judge == 0) {
            basic.showString("clear!")
            basic.pause(3000)
        } else {
            basic.showString("GAMEOVER")
            basic.pause(10500)
        }
    }
    if (y > 4) {
        y = 4
    }
})
