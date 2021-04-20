let x = -1
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        led.plot(x, y)
        basic.pause(100)
        if (x == 6) {
            x = -1
            y += 1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(x, y)
        x += -1
        basic.pause(100)
        if (x == -1) {
            x = 5
            y += -1
        }
    }
})
