// tests go here; this will not be compiled when this package is used as a library
basic.showNumber(constants.pinHigh())
basic.showNumber(constants.pinLow())
if (constants.on()) {
    basic.showString("On!")
}
if (!constants.pinLow()) {
    basic.showString("Off!")
}
basic.showNumber(constants.pi())
basic.showString(constants.pi().toString())
