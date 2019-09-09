<h1>MakeCode Beyond The Blocks</h1>
<h3>Adding custom constant blocks to your project</h3>
<h3>by David Sparks</h3>
<p>Original post: September 2019</p>

<p>This article will explain how to define a custom block to represent a constant value in MakeCode for the micro:bit.</p>

<p>If you are just looking for a quick reminder on how to create custom blocks, see the introductory article in this series: <a href="https://iowadave.github.io/Custom-Blocks-Top-Ten-Tricks/">The Top Ten Tricks For Creating Custom Blocks</a>.</p>

<p>MakeCode provides an extensive set of user-friendly graphical blocks representing commonly-used code instructions from JavaScript.</p>

<p>MakeCode even provides a JavaScript window in which you can view and edit the JavaScript code that goes with the blocks. Click the &ldquo;JavaScript&rdquo; icon to switch windows.</p>

<p>Not all of JavaScript is available through the blocks, however. One missing piece is the ability to create a constant as a standard block, in the same way a variable can be created.</p>

<p>What is a constant? It is a name attached to a value, similar to a variable.</p>

<p>The difference is that the name of a constant remains attached to the same value for the life of your code. By contrast, the name of a variable can be reassigned to a different value.</p>

<p>Why would you want a constant? Three reasons.</p>

<p>The first reason is because it is good practice to use meaningful names for values in your code.</p>

<p>For example, we know from Math that the circumference of a circle is approximately equal to the diameter multiplied by the number 3.14159. It is good coding practice to give that number a short, memorable name, such as &ldquo;pi&rdquo;. Use the name rather than the number to perform calculations. It makes your code easier for a human to read and to understand.</p>

<p>The second reason is accuracy and consistency: type once, use many times.</p>

<h4>JavaScript supports constants; Blocks do not</h4>

<p>Here is the &ldquo;official JavaScript&rdquo; way to declare and use a constant. It is done with the keyword, &ldquo;const&rdquo;, which attaches the name &ldquo;pi&rdquo; to the value 3.14159 in Exhibit 1. If you type this code in the JavaScript window of MakeCode, it will actually compile and run on both the browser simulator and a real micro:bit. (Figure 1) The solution for the circumference of a circle having a diameter of 3 units, 9.42, will appear on the display.</p>

<h4>Exhibit 1<br>
Declare and use a constant</h4>

<pre><code>
const PI = 3.14159;
let diameter = 3;
let circumference = PI * diameter;
basic.showNumber(circumference);
</code></pre>
