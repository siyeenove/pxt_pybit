
# Siyeenove Pybit Package

![](/image.png/)  

This library is designed to drive Pybit, You can get Pybit here.

[Buy](https://siyeenove.com/buy/)  

Product Tutorial: 

[Github](https://github.com/siyeenove/M1C0001)   
[Github PDF](https://siyeenove.github.io/M1C0001)  

## Code Example
```JavaScript
//Pybit ran forward at full speed.
Pybit.setWheelDirectionSpeed(Pybit.PybitWheels.LeftWheel, Pybit.WheelDir.FW, 100)
```

```JavaScript
//Set the speed and direction of the left and right wheels of the Pybit. 
Pybit.setWheelSpeed(-100, 100)
```

```JavaScript
//Set Pybit left and right wheels to stop.
Pybit.wheelStop(Pybit.PybitWheels.AllWheel)
```

```JavaScript
//Wheels speed calibration.
//When the speed of the left and right wheels of the Pybit trolley is not consistent,
//this function can adjust the speed of the wheel and save it permanently.
Pybit.wheelsAdjustment(0, 0) 
```

```JavaScript
//Pybit ran forward at full speed.
Pybit.carDirectionSpeed(Pybit.PybitDir.FW, 100)
```

```JavaScript
//Set Pybit to turn left at full speed.
Pybit.carTurnPlace(Pybit.PybitTurn.Left, 100)
```

```JavaScript
//Set Pybit to turn left at full speed at 50% turn rate.
Pybit.carTurn(Pybit.PybitTurn.Left, 50, 100)
```

```JavaScript
//Pybit stop.
Pybit.carStop()
```

```JavaScript
//Set Pybit two headlights on red.
Pybit.rgbLight(Pybit.RGBLight.RGBA, 0xff0000)  
```

```JavaScript
//Set Pybit two headlights on blue.
Pybit.singleHeadlights(Pybit.RGBLight.RGBA, 0, 0, 255)
```

```JavaScript
//Set Pybit two headlights off.
Pybit.turnOffAllHeadlights()
```

```JavaScript
//Read and display the value of the 3-way grayscale sensor.
basic.forever(function () {
    Pybit.trackbitStateValue()
    if (Pybit.readGrayscaleSensorState(Pybit.TrackbitStateType.TrackingState0)) {
        basic.showNumber(Pybit.returnGrayscaleSensorValue())
    } else if (Pybit.trackbitChannelState(Pybit.TrackbitChannel.Three, Pybit.TrackbitType.State0)) {
        basic.showNumber(Pybit.returnGrayscaleSensorValue())
    }
})
```

```JavaScript
//Read and display the value of the Sonar.
basic.forever(function () {
    basic.showNumber(Pybit.sonar(Pybit.SonarUnit.Centimeters))
    basic.pause(500)
})
```

```JavaScript
//Read and display the value of the "OK" key of the infrared remote control.
Pybit.irCallBack(function () {
    if (Pybit.irButton(Pybit.IRButtons.OK)) {
        basic.showNumber(Pybit.irValue())
    }
})
```

```JavaScript
//Set the 180-degree servo of S1 port to turn 0-180 degrees.
basic.forever(function () {
    Pybit.extendServoControl(Pybit.ServoIndex.S1, Pybit.ServoType.Servo180, 0)
    basic.pause(1000)
    Pybit.extendServoControl(Pybit.ServoIndex.S1, Pybit.ServoType.Servo180, 180)
    basic.pause(1000)
})
```

```JavaScript
//Set the 360-degree servo at S1 port to turn clockwise and counterclockwise.
basic.forever(function () {
    Pybit.continuousServoControl(Pybit.ServoIndex.S1, -100)
    basic.pause(1000)
    Pybit.continuousServoControl(Pybit.ServoIndex.S1, 100)
    basic.pause(1000)
})
```

```JavaScript
//Set Pybit external 3 AA batteries, and infinite loop display power level.
basic.showNumber(Pybit.batteryLevel(Pybit.BatteryType.AA))
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(Pybit.batteryLevel(Pybit.BatteryType.AA))
})
```

```JavaScript
//Send a string to the left and right text fields of the APP via Bluetooth serial port.
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    while (true) {
        bluetooth.uartWriteString(Pybit.display(Pybit.Textview.Left, ""))
        basic.pause(1000)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
	
})
```

```JavaScript
//Check whether the character received by the Bluetooth serial port is the instruction of the APP.
let data = ""
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    while (true) {
        data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        if (Pybit.appButton(data, Pybit.AppButton.F1)) {
            basic.showIcon(IconNames.Heart)
            basic.pause(1000)
        }
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
	
})
```

```JavaScript
//Read the firmware version of the chip on the Pybit.
basic.forever(function () {
    basic.showString(Pybit.readVersions())
    basic.pause(1000)
})

```

## Supported targets
for PXT/microbit

## License
MIT

