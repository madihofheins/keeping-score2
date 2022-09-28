input.onButtonPressed(Button.A, function () {
    long_hairt1 += 1
    basic.showNumber(long_hairt1)
    basic.pause(500)
    basic.showString("long hair")
})
input.onButtonPressed(Button.AB, function () {
    tie += 1
    basic.showNumber(tie)
    basic.pause(500)
    basic.showString("long hair")
})
input.onButtonPressed(Button.B, function () {
    short_hairt2 += 1
    basic.showNumber(short_hairt2)
    basic.pause(500)
    basic.showString("short hair")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("long nails")
    basic.showNumber(long_hairt1)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("short hair")
    basic.showNumber(short_hairt2)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("tie")
    basic.showNumber(tie)
    basic.clearScreen()
})
let tie = 0
let short_hairt2 = 0
let long_hairt1 = 0
long_hairt1 = 0
short_hairt2 = 0
tie = 0
basic.forever(function () {
	
})
