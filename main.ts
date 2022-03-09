function girar90gradosizquierda2 () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(260)
    maqueen.motorStop(maqueen.Motors.All)
}
function girar90gradosizquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.pause(260)
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90gradosizquierda()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 155)
        basic.pause(1000)
        girar90gradosizquierda()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 155)
    }
})
