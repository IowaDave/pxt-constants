/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf013"
//% groups=['Math', 'Pin-related', 'Boolean', 'others']

namespace constants {

    /**
     * Math constants:
     *E = 2.718281828459045;
     *LN2 = 0.6931471805599453;
     *LN10 = 2.302585092994046;
     *LOG2E = 1.4426950408889634;
     *LOG10E = 0.4342944819032518;
     *PI = 3.141592653589793;
     *SQRT1_2 = 0.7071067811865476;
     *SQRT2 = 1.4142135623730951;
     */

    /**
     * returns constant 3.141592653589793
     */
    //% block="constPI"
    //% group="Math"
    export function constPI(): number {
        return Math.PI;
    }

    /**
     * returns constant 2.718281828459045;
     */
    //% block="constE"
    //% group="Math"
    export function constE(): number {
        return Math.E;
    }

    /**
     * returns constant 1.4142135623730951
     */
    //% block="constSQRT2"
    //% group="Math"
    export function constSQRT2(): number {
        return Math.SQRT2;
    }

    /**
     * returns constant 0.7071067811865476
     */
    //% block="constSQRT1_2"
    //% group="Math"
    export function constSQRT1_2(): number {
        return Math.SQRT1_2;
    }

    /**
     * returns constant 0.4342944819032518
     */
    //% block="constLOG10E"
    //% group="Math"
    export function constLOG10E(): number {
        return Math.LOG10E;
    }

    /**
     * returns constant 1.4426950408889634
     */
    //% block="constLOG2E"
    //% group="Math"
    export function constLOG2E(): number {
        return Math.LOG2E;
    }

    /**
     * returns constant 2.302585092994046
     */
    //% block="constLN10"
    //% group="Math"
    export function constLN10(): number {
        return Math.LN10;
    }

    /**
     * returns constant 0.6931471805599453
     */
    //% block="constLN2"
    //% group="Math"
    export function constLN2(): number {
        return Math.LN2;
    }

    /**
     * returns a boolean value of false
     */
    //% block="OFF"
    //% group="Boolean"
    export function off(): boolean {
        return false;
    }
    /**
     * returns a boolean value of true
     */
    //% block="ON"
    //% group="Boolean"
    export function on(): boolean {
        return true;
    }
    /**
     * returns constant value of 1
     * useful to set digital pin 'high' or 'on'
     */
    //% block="pinHigh"
    //% group="Pin-related"
    export function pinHigh(): number {
        return 1;
    }
    /**
     * returns constant value of zero (0)
     * useful to set digital pin 'low' or 'off'
     */
    //% block="pinLow"
    //% group="Pin-related"
    export function pinLow(): number {
        return 0;
    }
} 
