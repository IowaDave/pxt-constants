/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace constants {
    /**
     * returns a numeric value of 3.14159
     */
    //% block="PI"
    export function pi():number {
        return 3.14159;
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
} 