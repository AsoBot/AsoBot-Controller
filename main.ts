//% color=#1299AF weight=100 icon="\f544" block="AsoBot-Controller"
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

    //% block="P13判定"
    input.onButtonPressed(Button.A, function () {
        return pins.digitalReadPin(DigitalPin.P13)
    })
}
