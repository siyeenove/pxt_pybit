pybit.irCallBack(function () {
    if (pybit.irButton(pybit.IRButtons.Up)) {
        pybit.carDirectionSpeed(pybit.PybitDir.FW, 100)
    }
    if (pybit.irButton(pybit.IRButtons.Down)) {
        pybit.carDirectionSpeed(pybit.PybitDir.BW, 100)
    }
    if (pybit.irButton(pybit.IRButtons.Left)) {
        pybit.carTurn(pybit.PybitTurn.Left, 50, 100)
    }
    if (pybit.irButton(pybit.IRButtons.Right)) {
        pybit.carTurn(pybit.PybitTurn.Right, 50, 100)
    }
    if (pybit.irButton(pybit.IRButtons.OK)) {
        pybit.carStop()
    }

    // The correct infrared key value can only be read 
    // when the infrared key value is not equal to 0 by logical judgment.
    //if (Pybit.irValue() != 0) {
    //    basic.showNumber(Pybit.irValue())
    //}
})

// When the speed of the left and right wheels of the Pybit trolley is not consistent, 
// this function can adjust the speed of the wheel and save it permanently.
pybit.wheelsAdjustment(0, 0)

basic.pause(1000)
pybit.setWheelDirectionSpeed(pybit.PybitWheels.AllWheel, 0, pybit.WheelDir.FW)
basic.pause(1000)
pybit.setWheelDirectionSpeed(pybit.PybitWheels.AllWheel, 0, pybit.WheelDir.BW)
basic.pause(1000)
pybit.wheelStop(pybit.PybitWheels.LeftWheel)
pybit.singleHeadlights(pybit.RGBLight.RGBA, 255, 255, 255)
basic.showNumber(pybit.batteryLevel(pybit.BatteryType.AA))
basic.pause(1000)
basic.showString(pybit.readVersions())
basic.pause(1000)
basic.forever(function () {
    pybit.trackbitStateValue()
    if (pybit.readGrayscaleSensorState(pybit.TrackbitStateType.TrackingState0)) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    }
    pybit.extendServoControl(pybit.ServoIndex.S1, pybit.ServoType.Servo180, 0)
    if (pybit.readGrayscaleSensorState(pybit.TrackbitStateType.TrackingState7)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    }
    basic.showNumber(pybit.sonar(pybit.SonarUnit.Centimeters))
    basic.pause(1000)
    pybit.extendServoControl(pybit.ServoIndex.S1, pybit.ServoType.Servo180, 180)
})