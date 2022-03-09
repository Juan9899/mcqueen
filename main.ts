function derecha () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 173)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 173)
    basic.pause(250)
    maqueen.motorStop(maqueen.Motors.All)
}
function izquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 173)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 173)
    basic.pause(250)
    maqueen.motorStop(maqueen.Motors.All)
}
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 9) {
        maqueen.motorStop(maqueen.Motors.All)
        izquierda()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 154)
        basic.pause(1000)
        derecha()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 173)
    }
})
