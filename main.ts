input.onButtonPressed(Button.A, function () {
    if (position == 0) {
        position = 1
    }
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
})
input.onButtonPressed(Button.B, function () {
    if (position == 4) {
        position = 3
    }
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
})
let linelight: number[] = []
let emptyslot = 0
let position = 0
position = 0
let lineposition = 5
basic.forever(function () {
    if (lineposition == 5) {
        if (emptyslot != position) {
            basic.showIcon(IconNames.No)
            basic.pause(2000)
        }
        lineposition = 0
        emptyslot = randint(0, 4)
        linelight = []
        for (let I = 0; I <= 4; I++) {
            if (emptyslot != I) {
                linelight.push(I)
            }
        }
    }
    for (let j = 0; j <= 3; j++) {
        led.plot(linelight[j], lineposition)
    }
    lineposition += 1
    led.plot(position, 4)
    basic.pause(1000)
    basic.clearScreen()
})
