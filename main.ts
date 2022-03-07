maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 8) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 173)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 173)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
        basic.pause(600)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 173)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 173)
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
    }
})
