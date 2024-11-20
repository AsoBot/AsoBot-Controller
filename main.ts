//% color=#1299AF weight=100 icon="\f544" block="AsoBot-Controller"
namespace AsoBotController {
    function lcdWriteRegister(reg: number, val: number) {
        let lcdAddr = 0x3e
        let cmd = (reg << 8) | val
        pins.i2cWriteNumber(lcdAddr, cmd, NumberFormat.UInt16BE)
    }

    //% block="コントローラ初期化"
    export function lcdInit() {
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
    }
}
