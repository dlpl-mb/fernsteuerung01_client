input.onButtonPressed(Button.A, function () {
    radio.sendValue("taste", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("taste", 1)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(21)
