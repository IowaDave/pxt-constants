# pxt-constants
### A MakeCode extension package providing a selection of constant-valued "reporter" blocks 

Constants are names that your code attaches to values which cannot be changed.

TypeScript, an advanced version of JavaScript, is the language behind the blocks in MakeCode. It supports the ability to declare a value as a constant. It also provides a built-in selection of useful Math constants.

The standard blocks do not directly support declaring values as constants, however. Nor do they give direct access to the built-in Math constants.

The limitations are understandable as balancing the desire to have a useful version of the TypeScript language yet keep the learning burden small for persons at an entry-level of coding.

These custom blocks are intended to overcome these two design limitations in the MakeCode standard blocks.

You can also use the blocks in this package as examples for creating your own custom constant blocks. An article explaining how to create custom blocks as constants accompanies this project. It is available online at the following web address: https://iowadave.github.io/pxt-constants/

Custom blocks, in general, offer a solution for coders having some experience, who prefer to use the block-oriented MakeCode editor but desire access to more features of the TypeScript language.

Reporter blocks are oval-shaped and six-sided blocks that represent values coming in from outside your own code. You can read the data they represent, as if they were variables. 

However, your code cannot directly change the value of a reporter block. This is the quality that allows custom blocks to report unchangeable values, that is, to function as constants.

The reporter blocks provided in this package are grouped into three functional categories. We display the names as they appear in the blocks that they define.

###### The Built-in Math Constants
These values are frequently used for advanced math or science computation at middle-school and high-school levels. 
* constE reports the value of *e*, the base of the natural logarithms, approximated as 2.718281828459045
* constLN2 reports the natural logarithm of 2, approximated as 0.6931471805599453
* constLN10 reports the natural logarithm of 10, approximated as 2.302585092994046
* constLOG2E reports the logarithm (base 2) of *e*, approximated as 1.4426950408889634
* constLOG10E reports the logarithm (base 10) of *e*, approximated as 0.4342944819032518
* constPI reports the value of *pi*, the ratio of a circle's circumference to its diameter, approximated as 3.141592653589793
* constSQRT1_2 reports the square root of 1/2, approximated as 0.7071067811865476
* constSQRT2 reports the square root of 2, approximated as 1.4142135623730951

###### Pin-related Constants
These blocks assign names to the two levels, 1 and 0, that can be set on a digital pin of the micro:bit. The blocks can be used in place of a number to change the setting a digital pin or for comparison to its current setting.
* pinHigh returns the value, 1
* pinLow returns the value, 0

###### Boolean constants
These blocks provide alternative names to the values 'true' and 'false' for use with logic blocks. The alternative names might be more intuitively meaningful in some use cases.
* on returns the value, true
* off returns the value, false


## TODO

- [x] Add a reference for your blocks here
- [ ] NA: Add "icon.png" image (300x200) in the root folder
- [ ] NA: Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] NA: Turn on your automated build on https://travis-ci.org
- [x] Use "pxt bump" to create a tagged release on GitHub
- [x] On GitHub, create a new file named LICENSE. Select the MIT License template.
- [ ] Get your package reviewed and approved https://makecode.microbit.org/extensions/approval

Read more at https://makecode.microbit.org/extensions

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

