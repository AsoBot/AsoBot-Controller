namespace AsoBotController {

    //% block="コントローラ初期化"
    export function lcdInit() {
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
    }

    //% block="P13入力"
    input.onButtonPressed(Button.A, function () {
        serial.writeLine("" + (pins.digitalReadPin(DigitalPin.P13)))
    })
}
