input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(180)
})
servos.P2.setAngle(0)
