
# Siyeenove Pybit Package

![](/image.png/)  

This library is designed to drive Pybit, You can get Pybit here:   

[Buy](https://www.amazon.com/dp/B0FQ612LMN)   
[SIYEENOVE](https://siyeenove.com/buy/)   

Product Tutorial: 
  
[Github PDF](https://siyeenove.github.io/M1C0001/Pybit%20tutorial%20-%20English%202025-10-14.pdf)    
[SIYEENOVE](https://siyeenove.com/tutorial/)    

## Code Example
```JavaScript
//Pybit ran forward at full speed.
pybit.setWheelDirectionSpeed(pybit.pybitWheels.LeftWheel, pybit.WheelDir.FW, 100)
```

```JavaScript
//Set the speed and direction of the left and right wheels of the Pybit. 
pybit.setWheelSpeed(-100, 100)
```

```JavaScript
//Set Pybit left and right wheels to stop.
pybit.wheelStop(pybit.pybitWheels.AllWheel)
```

```JavaScript
//Wheels speed calibration.
//When the speed of the left and right wheels of the Pybit trolley is not consistent,
//this function can adjust the speed of the wheel and save it permanently.
pybit.wheelsAdjustment(0, 0) 
```

```JavaScript
//Pybit ran forward at full speed.
pybit.carDirectionSpeed(pybit.pybitDir.FW, 100)
```

```JavaScript
//Set Pybit to turn left at full speed.
pybit.carTurnPlace(pybit.pybitTurn.Left, 100)
```

```JavaScript
//Set Pybit to turn left at full speed at 50% turn rate.
pybit.carTurn(pybit.pybitTurn.Left, 50, 100)
```

```JavaScript
//pybit stop.
pybit.carStop()
```

```JavaScript
//Set Pybit two headlights on red.
pybit.rgbLight(pybit.RGBLight.RGBA, 0xff0000)  
```

```JavaScript
//Set Pybit two headlights on blue.
pybit.singleHeadlights(pybit.RGBLight.RGBA, 0, 0, 255)
```

```JavaScript
//Set Pybit two headlights off.
pybit.turnOffAllHeadlights()
```

```JavaScript
//Read and display the value of the 3-way grayscale sensor.
basic.forever(function () {
    pybit.trackbitStateValue()
    if (pybit.readGrayscaleSensorState(pybit.TrackbitStateType.TrackingState0)) {
        basic.showNumber(pybit.returnGrayscaleSensorValue())
    } else if (pybit.trackbitChannelState(pybit.TrackbitChannel.Three, pybit.TrackbitType.State0)) {
        basic.showNumber(pybit.returnGrayscaleSensorValue())
    }
})
```

```JavaScript
//Read and display the value of the Sonar.
basic.forever(function () {
    basic.showNumber(pybit.sonar(pybit.SonarUnit.Centimeters))
    basic.pause(500)
})
```

```JavaScript
//Read and display the value of the "OK" key of the infrared remote control.
pybit.irCallBack(function () {
    if (pybit.irButton(pybit.IRButtons.OK)) {
        basic.showNumber(pybit.irValue())
    }
})
```

```JavaScript
//Set the 180-degree servo of S1 port to turn 0-180 degrees.
basic.forever(function () {
    pybit.extendServoControl(pybit.ServoIndex.S1, pybit.ServoType.Servo180, 0)
    basic.pause(1000)
    pybit.extendServoControl(pybit.ServoIndex.S1, pybit.ServoType.Servo180, 180)
    basic.pause(1000)
})
```

```JavaScript
//Set the 360-degree servo at S1 port to turn clockwise and counterclockwise.
basic.forever(function () {
    pybit.continuousServoControl(pybit.ServoIndex.S1, -100)
    basic.pause(1000)
    pybit.continuousServoControl(pybit.ServoIndex.S1, 100)
    basic.pause(1000)
})
```

```JavaScript
//Set pybit external 3 AA batteries, and infinite loop display power level.
basic.showNumber(pybit.batteryLevel(pybit.BatteryType.AA))
basic.forever(function () {
    basic.pause(1000)
    basic.showNumber(pybit.batteryLevel(pybit.BatteryType.AA))
})
```

```JavaScript
//Send a string to the left and right text fields of the APP via Bluetooth serial port.
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    while (true) {
        bluetooth.uartWriteString(pybit.display(pybit.Textview.Left, ""))
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
        if (pybit.appButton(data, pybit.AppButton.F1)) {
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
    basic.showString(pybit.readVersions())
    basic.pause(1000)
})

```

## Supported targets
for PXT/microbit

## License
MIT

