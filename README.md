<h1>MakeCode Beyond The Blocks</h1>
<h3>Adding custom constant blocks to your project</h3>
<h3>by David Sparks</h3>
<p>Original post: September 2019</p>

<p>This article will explain how to define a custom block to represent a constant value in MakeCode for the micro:bit.</p>

<p>If you are just looking for a quick reminder on how to create custom blocks, see the introductory article in this series: <a href="https://iowadave.github.io/Custom-Blocks-Top-Ten-Tricks/">The Top Ten Tricks For Creating Custom Blocks</a>. This article builds on that one by illustrating the procedures.</p>

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

<h5><img alt="Figure 1" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%201.png"><br>
Figure 1<br>
The JavaScript window with an example declaring a constant</h5>

<em>Dear Experts: Yes, we know about Math.PI. It will be used later in the article. Please kindly remember this article is about user-defined constant blocks.</em>

<p>&ldquo;What is the problem?&rdquo; you might protest. &ldquo;I just declared and used a constant with JavaScript in MakeCode!&rdquo;</p>

<p>Here is the problem: MakeCode will revise your code when you switch over to the Blocks window. Try it.</p>

<p>Click the â€œBlocksâ€ icon to view the code as blocks. (Figure 2)</p>

<h5><img alt="Figure 2" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%202.png"><br>
Figure 2<br>
The JavaScript has been converted into blocks</h5>

<p>Verify that the code still produces the correct result.</p>

<p>Click the â€œJavaScriptâ€ icon again. Look at your code now. (Figure 3)</p>

<h5><img alt="Figure 3" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%203.png"><br>
Figure 3<br>
The blocks have been converted back into JavaScript</h5>

<p>Your declaration was this: <code>const pi = 3.14159</code>. Makecode changed it to this: <code>let pi = 3.14159</code>.</p>

<p>By changing one word, <code>const</code> to <code>let</code>, MakeCode turned pi into a variable. We know this because <code>let</code> is a JavaScript keyword for declaring variables.</p>

<p>Now, it is certainly good practice to use meaningful names for both variables and constants. It is not a mistake to use <code>let</code> rather than <code>const</code> as a way to attach the name pi to the number 3.14159. However, it creates a risk for errors elsewhere in your code.</p>

<p> risk is that a variableâ€™s name can be reassigned to a different value. Somewhere later in your code, when you are tired or in a hurry, you might enter something like the instructions shown in Figures 4 and 5.</p>

<h5><img alt="Figure 4" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%204.png"><br>
Figure 4</h5>

<h5><img alt="Figure 5" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%205.png"><br>
Figure 5<br>
Examples of reassigning a variable name to a new value</h5>

<p>MakeCode (and JavaScript) will obey instructions to change the value attached to a variable name that was declared with the keyword, <code>let</code> â€” even if you did not intend to instruct for that particular change!</p>

<p>After its value changes, calculations performed using the name PI will be incorrect. Bugs like this can and do happen even to experienced programmers. They can be difficult to locate.</p>

<p>This brings us to the third reason why you might want to declare a constant.</p>

<p>JavaScript will not allow you to change the value attached to a name that was declared with the keyword â€œconstâ€. The code examples in Figures 4 and 5 above would produce an error, alerting you to the problem before it can cause trouble.</p>

<p>Now we see the problem: You cannot declare a const directly with blocks. If you do so in the main JavaScript window of MakeCode, it will be changed into a variable block.</p>

<p>Solution: create a custom block that functions like a const. And here is happy news: the MakeCode editor is the only tool you need.</p> 

<p>The official documentation for custom blocks, found at <a href="https://makecode.microbit.org/blocks/custom">https://makecode.microbit.org/blocks/custom</a>, states, &ldquo;Any exported JavaScript function can be turned into a block by simply adding a //% block comment.&rdquo;</p>

<p>It might not be immediately obvious how to do this in the MakeCode editor, however. The goal of this article is to show you.</p>

<h4>PREVIEW</h4>

<p>We will go into detail -- with pictures -- about the steps for adding a file named &ldquo;custom.ts&rdquo;, where you can write code that creates a new Custom group to your MakeCode blocks. The steps are:</p>

<ol>
	<li>Put the editor into scripting mode</li>
	<li>Click open the Explorer</li>
	<li>Click the &ldquo;+&rdquo; sign that appears</li>
	<li>Click &ldquo;Go Ahead&rdquo; in the dialog box that appears</li>
	<li>Write the JavaScript code for your block in the custom.ts file</li>
</ol>

<p>Click the JavaScript icon to put MakeCode into scripting mode. In a new project it would look like Figure 6.</p>

<h5><img alt="Figure 6" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%206.png"><br>
Figure 6<br>
JavaScript mode</h5>

<p>With JavaScript active, locate the link that says &ldquo;Explorer >&rdquo; (Figure 7)</p>

<h5><img alt="Figure 7" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%207.png"><br>
Figure 7<br>
The Explorer link</h5>

<p>Click the Explorer link. A list of links to various code modules drops down. Keep your focus on the top item, the Explorer link. Notice that a plus sign, &ldquo;+&rdquo;, has been added to the Explorer link. (Figure 8) Click the plus sign.</p>

<h5><img alt="Figure 8" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%208.png"><br>
Figure 8<br>
Partial list of the links under the Explorer</h5>

<p>A window opens asking if you want to add custom blocks. Click â€œGo Aheadâ€. (Figure 9)</p>

<h5><img alt="Figure 9" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%209.png"><br>
Figure 9<br>
The custom blocks dialog window</h5>

<p>A new module named custom.ts will appear and be highlighted in the Explorer list. In future when you want to edit the custom.ts file, navigate to it under the Explorer and click to highlight it again.</p>

<p>The JavaScript window will fill in with the custom.ts code ready for editing. When you first add custom.ts to your project, it will contain code examples provided by default. (Figures 10 and 11)</p>

<h5><img alt="Figure 10" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2010.png"><br>
Figure 10<br>
Explorer list containing the custom.ts item</h5>

<h5><img alt="Figure 11" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2011.png"><br>
Figure 11<br>
The first few lines of custom.ts default content. Note the web address for official MakeCode documentation about writing custom blocks.</br>
