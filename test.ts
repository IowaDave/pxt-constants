// tests go here; this will not be compiled when this package is used as a library

// pin-related constants
basic.showString(constants.pinHigh().toString())
basic.showString(constants.pinLow().toString())

// boolean constants
if (constants.on()) {
    basic.showString("On!")
}
if (!constants.off()) {
    basic.showString("Not Off!")
}

// math constants
basic.showString(constants.constPI().toString())
basic.showString(constants.constE().toString())
basic.showString(constants.constLN10().toString())
basic.showString(constants.constLN2().toString())
basic.showString(constants.constLOG10E().toString())
basic.showString(constants.constLOG2E().toString())
basic.showString(constants.constSQRT1_2().toString())
basic.showString(constants.constSQRT2().toString())
