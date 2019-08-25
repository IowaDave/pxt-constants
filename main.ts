/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf192"
namespace constants {
    /**
     * returns a numeric value of 3.14159
     */
    //% block="PI"
    export function pi():number {
        return Math.PI;
    }
    /**
     * returns a boolean value of false
     */
    //% block="OFF"
    export function off():boolean {
        return false;
    }
    /**
     * returns a boolean value of true
     */
    //% block="ON"
    export function on():boolean {
        return true;
    }
    /**
     * returns constant value of 1
     * useful to set digital pin 'high' or 'on'
     */
    //% block="pinHigh"
    export function pinHigh(): number {
        return 1;
    }
    /**
     * returns constant value of zero (0)
     * useful to set digital pin 'low' or 'off'
     */
    //% block="pinLow"
    export function pinLow(): number {
        return 0;
    }
} 
