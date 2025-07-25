Pybit.irCallBack(function () {
    if (Pybit.irButton(Pybit.IRButtons.Up)) {
        Pybit.carDirectionSpeed(Pybit.PybitDir.FW, 100)
    }
    if (Pybit.irButton(Pybit.IRButtons.Down)) {
        Pybit.carDirectionSpeed(Pybit.PybitDir.BW, 100)
    }
    if (Pybit.irButton(Pybit.IRButtons.Left)) {
        Pybit.carTurn(Pybit.PybitTurn.Left, 50, 100)
    }
    if (Pybit.irButton(Pybit.IRButtons.Right)) {
        Pybit.carTurn(Pybit.PybitTurn.Right, 50, 100)
    }
    if (Pybit.irButton(Pybit.IRButtons.OK)) {
        Pybit.carStop()
    }

    // The correct infrared key value can only be read 
    // when the infrared key value is not equal to 0 by logical judgment.
    //if (Pybit.irValue() != 0) {
    //    basic.showNumber(Pybit.irValue())
    //}
})

// When the speed of the left and right wheels of the Pybit trolley is not consistent, 
// this function can adjust the speed of the wheel and save it permanently.
Pybit.wheelsAdjustment(0, 0)

basic.pause(1000)
Pybit.setWheelDirectionSpeed(Pybit.PybitWheels.AllWheel, 0, Pybit.WheelDir.FW)
basic.pause(1000)
Pybit.setWheelDirectionSpeed(Pybit.PybitWheels.AllWheel, 0, Pybit.WheelDir.BW)
basic.pause(1000)
Pybit.wheelStop(Pybit.PybitWheels.LeftWheel)
Pybit.singleHeadlights(Pybit.RGBLight.RGBA, 255, 255, 255)
basic.showNumber(Pybit.batteryLevel(Pybit.BatteryType.AA))
basic.pause(1000)
basic.showString(Pybit.readVersions())
basic.pause(1000)
basic.forever(function () {
    Pybit.trackbitStateValue()
    if (Pybit.readGrayscaleSensorState(Pybit.TrackbitStateType.TrackingState0)) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    }
    Pybit.extendServoControl(Pybit.ServoIndex.S1, Pybit.ServoType.Servo180, 0)
    if (Pybit.readGrayscaleSensorState(Pybit.TrackbitStateType.TrackingState7)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    }
    basic.showNumber(Pybit.sonar(Pybit.SonarUnit.Centimeters))
    basic.pause(1000)
    Pybit.extendServoControl(Pybit.ServoIndex.S1, Pybit.ServoType.Servo180, 180)
})