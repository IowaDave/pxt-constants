<h1>MakeCode Beyond The Blocks</h1>
<h3>Adding custom constant blocks to your project</h3>
<h3>by David Sparks</h3>
<p>Original post: September 2019</p>

<p>This article will explain how to define a custom block to represent a constant value in MakeCode for the micro:bit.</p>

<p>For a quick summary of how to create custom blocks, see the introductory article in this series: <a href="https://iowadave.github.io/Custom-Blocks-Top-Ten-Tricks/">The Top Ten Tricks For Creating Custom Blocks</a>. You will find the author&rsquo;s list of reference links related to custom blocks in there also. This article builds on that one by illustrating the procedures.</p>

<p>MakeCode provides an extensive set of user-friendly graphical blocks representing commonly-used code instructions from JavaScript.</p>

<p>MakeCode even provides a JavaScript window in which you can view and edit the JavaScript code that goes with the blocks. Click the &ldquo;JavaScript&rdquo; icon to switch windows.</p>

<p>Not all of JavaScript is available through the blocks, however. One missing piece is the ability to create a constant as a standard block, in the same way a variable can be created.</p>

<p>What is a constant? It is a name attached to a value, similar to a variable.</p>

<p>The difference is that the name of a constant remains attached to the same value for the life of your code. By contrast, the name of a variable can be reassigned to a different value.</p>

<p>Why would you want a constant? Three reasons.</p>

<p>The first reason is because it is good practice to use meaningful names for values in your code.</p>

<p>For example, we know from Math that the circumference of a circle is approximately equal to the diameter multiplied by the number 3.14159. It is good coding practice to give that number a short, memorable name, such as <code>pi</code>. Use the name rather than the number to perform calculations. It makes your code easier for a human to read and to understand.</p>

<p>The second reason involves accuracy and consistency: type once, use many times. Suppose your code needs to use <em>precisely</em> the same number in several places. A custom block for a detailed number like pi can help you avoid mis-typing a lengthy string of digits.</p>

<h4>JavaScript supports constants; Blocks do not</h4>

<p>The &ldquo;official JavaScript&rdquo; way to declare and use a constant is to use the keyword, <code>const</code>. For example, we use it to attach the name <code>pi</code> to the value 3.14159 in Exhibit 1.</p>

<p>If you copy and paste this code into the JavaScript window of MakeCode, it will actually compile and run on both the browser simulator and a real micro:bit. (Figure 1) A solution for the circumference of a circle having a diameter of 3 units, 9.42, will appear on the display.</p>

<h5>Exhibit 1<br>
Declare and use a constant</h5>

<pre><code>const pi = 3.14159;
let diameter = 3;
let circumference = pi * diameter;
basic.showNumber(circumference);
</code></pre>

<h5><img alt="Figure 1" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%201.png">
<br>Figure 1<br>
The JavaScript window with an example declaring a constant</h5>

<p><em>Dear Experts: Yes, we know about Math.PI. It will be used later in the article. Please kindly remember this article is about user-defined constant blocks.</em></p>

<p>&ldquo;What is the problem?&rdquo; you might protest. &ldquo;I just declared and used a constant with JavaScript in MakeCode!&rdquo;</p>

<p>Here is the problem: MakeCode will revise your code when you switch over to the Blocks window. Try it.</p>

<p>Click the &ldquo;Blocks&rdquo; icon to view the code as blocks. (Figure 2)</p>

<h5><img alt="Figure 2" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%202.png">
<br>Figure 2<br>
The JavaScript has been converted into blocks</h5>

<p>Verify that the code still produces the correct result.</p>

<p>Click the &ldquo;JavaScript&rdquo; icon again. Look at your code now. (Figure 3)</p>

<h5><img alt="Figure 3" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%203.png">
<br>Figure 3<br>
The blocks have been converted back into JavaScript</h5>

<p>Your declaration was this: <code>const pi = 3.14159</code>. Makecode changed it to this: <code>let pi = 3.14159</code>.</p>

<p>By changing one word, <code>const</code> to <code>let</code>, MakeCode turned <code>pi</code> into a variable. We know this because <code>let</code> is a JavaScript keyword for declaring variables.</p>

<p>Now, it is certainly good practice to use meaningful names for both variables and constants. MakeCode will not flag an error if you use <code>let</code> rather than <code>const</code> as a way to attach the name <code>pi</code> to the number 3.14159. However, it creates a risk for errors elsewhere in your code.</p>

<p>The risk is that a variable&rsquo;s name can be reassigned to a different value. Somewhere later in your code, when you are tired, distracted or in a hurry, you might enter something like the instructions shown in Figures 4 and 5.</p>

<h5><img alt="Figure 4" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%204.png">
<br>Figure 4</h5>

<h5><img alt="Figure 5" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%205.png">
<br>Figure 5<br>
Examples of reassigning a variable name to a new value</h5>

<p>MakeCode (and JavaScript) will obey instructions to change the value attached to a variable name that was declared with the keyword, <code>let</code> &mdash; even if you did not intend to instruct for that particular change!</p>

<p>After its value changes, calculations performed using the name <code>pi</code> will be incorrect. Bugs like this can and do happen even to experienced programmers. They can be difficult to locate.</p>

<p>This brings us to the third reason why you might want to declare a constant.</p>

<p>JavaScript will not allow you to change the value attached to a name that was declared with the keyword <code>const</code>. The code examples in Figures 4 and 5 above would produce an error, alerting you to the problem before it can cause trouble.</p>

<p>To restate the problem: you cannot declare a <code>const</code> directly with blocks. If you do so in the main JavaScript window of MakeCode, it will be changed into a variable block.</p>

<p>Our solution: create a custom block that functions like a <code>const</code>. And here is happy news: the MakeCode editor is the only tool you need!</p> 

<p>The official documentation for custom blocks, found at <a href="https://makecode.microbit.org/blocks/custom">https://makecode.microbit.org/blocks/custom</a>, states, &ldquo;Any exported JavaScript function can be turned into a block by simply adding a //% block comment.&rdquo;</p>

<p>It might not be immediately obvious how to do this in the MakeCode editor, however. The goal of this article is to show you.</p>

<h4>PREVIEW</h4>

<p>We will go into detail &mdash; with pictures &mdash; about the steps for adding a file named &ldquo;custom.ts&rdquo;. The editor converts the code you write in custom.ts into a new Custom group of MakeCode blocks. The steps for editing the custom.ts file in a new project are:</p>

<ol>
	<li>Put the editor into scripting mode</li>
	<li>Click open the Explorer</li>
	<li>Click the &ldquo;+&rdquo; sign that appears</li>
	<li>Click &ldquo;Go Ahead&rdquo; in the dialog box that appears</li>
	<li>Write the JavaScript code for your block in the custom.ts file</li>
</ol>

<p>Click the JavaScript icon to put MakeCode into scripting mode. In a new project it would look like Figure 6.</p>

<h5><img alt="Figure 6" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%206.png">
<br>Figure 6<br>
JavaScript mode</h5>

<p>With JavaScript active, locate the link that says &ldquo;Explorer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&rdquo; (Figure 7)</p>

<h5><img alt="Figure 7" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%207.png">
<br>Figure 7<br>
The Explorer link</h5>

<p>Click the Explorer link. A list of links to various code modules drops down. Keep your focus on the top item, the Explorer link. Notice that a plus sign, &ldquo;+&rdquo;, has been added to the Explorer link. (Figure 8) Click the plus sign.</p>

<h5><img alt="Figure 8" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%208.png"><br>
Figure 8<br>
Partial list of the links under the Explorer</h5>further

<p>A window opens asking if you want to add custom blocks. Click &ldquo;Go Ahead&rdquo;. (Figure 9)</p>

<h5><img alt="Figure 9" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%209.png">
<br>Figure 9<br>
The custom blocks dialog window</h5>

<p>A new module named custom.ts will appear and be highlighted in the Explorer list.</p>

<p>In future, after you have added custom.ts to your project, you may want to edit the file further. Navigate to it under the Explorer and click custom.ts to highlight it again.</p>

<p>The JavaScript window will fill in with the custom.ts code ready for editing. When you first add custom.ts to your project, it will contain code examples provided by default. (Figures 10 and 11)</p>

<h5><img alt="Figure 10" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2010.png">
<br>Figure 10<br>
Explorer list containing the custom.ts item</h5>

<h5><img alt="Figure 11" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2011.png"><br>
Figure 11<br>
The first few lines of custom.ts default content. Note the web address for official MakeCode documentation about writing custom blocks.</br></h5>

<p>You can delete most of the default code examples in the custom.ts module. However, be sure to keep the parts shown in Figure 12, including the curly bracket at the end. This code creates a <code>namespace</code> named &ldquo;custom&rdquo;. The namespace establishes the environment for creating custom blocks using the MakeCode editor.</p>

<h5><img alt="Figure 12" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2012.png">
<br>Figure 12<br>
The custom namespace</h5>

<p>Custom blocks are created by typing specially-formatted code in-between the curly brackets shown in Figure 12, above, as demonstrated in Exhibit 2, below.</p>

<p>Exhibit 2 lists a custom namespace containing one custom block, named <code>pi</code>, which provides a rather precise value for the mathematical constant of the same name. The syntax is important. The simplest thing might be to copy this code and paste it into the custom.ts window of your MakeCode project, replacing what was there.</p>

<h5>Exhibit 2
custom.ts code for the custom constant block named pi</h5>
<pre><code>/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /**
     * returns a constant numeric value of 3.141592563589793
     */
    //% block="pi"
    export function pi(): number {
        return Math.PI;
    }
}</code></pre>

<p>Your code should look like the screen image in Figure 13.</p>

<h5><img alt="Figure 13" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2013.png">
<br>Figure 13<br>
Custom code to create the pi block</h5>

<p><em>Dear Experts: We used Math.PI in this example. We will discuss this special bit of JavaScript (and others like it) in more detail at the end of the article.</em></p>

<p>Compile your custom block code by clicking the Blocks icon. If all goes well, you will see a bright green Custom group added to the main blocks list. (Figure 14) If there are problems, stay in JavaScript and look for squiggly red underlines indicating potential trouble spots in your custom block code.</p>

<h5><img alt="Figure 14" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2014.png">
<br>Figure 14<br>
Blocks appear if code compiles correctly</h5>

<p>Reload the browser window to make your new custom block available to MakeCode. For example, in the Chrome browser the reload icon looks like a circle with an arrow in it. (Figure 15)</p>

<h5><img alt="Figure 15" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2015.png">
<br>Figure 15<br>
The Chrome browser reload icon.</h5>

<p>Click the Custom group to reveal the new block. (Figure 16)</p>

<h5><img alt="Figure 16" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2016.png"><br>
Figure 16<br>
The pi block in the Custom group</h5>

<p>Allow your mouse to linger on the new block. A &ldquo;help&rdquo; message will pop up. This is the comment line that you typed in your custom code. (Figure 17)</p>

<h5><img alt="Figure 17" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2017.png"><br>
Figure 17<br>
Helpful popup text from the comment in the custom block code</h5>

<p>You can use the custom pi block anywhere you would use the number 3.141592653589793 or a numeric variable, with one exception.</p>

<p>MakeCode will not allow you to change its value with the blocks.</p>

<p>Of course, that protective effect is the whole idea of using a constant.</p>

<p>You can include more than one constant in your custom.ts file. And you can make constant blocks of other types, not only of numbers.</p>

<p>For example, Exhibit 3 lists code that extends the custom namespace by adding boolean constants to substitute for true and false when it might be more clear to say YES or NO. Again, just copy the code in Exhibit 2 and paste it into your custom.ts file, replacing what was there before. (Figures 18 and 19)</p>

<h5>Exhibit 3<br>
custom.ts code defining three custom constant blocks</h5>

<pre><code>/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /**
     * returns a constant numeric value of 3.141592563589793
     */
    //% block="pi"
    export function pi(): number {
        return Math.PI;
    }
    /**
     * return a constant boolean value of true
     */
    //% block="yes"
    export function yes(): boolean {
        return true;
    }
    /**
     * return a constant boolean value of false
     */
    //% block="no"
    export function no(): boolean {
        return false;
    }
}</code></pre>

<h5><img alt="Figure 18" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2018.png"><br>
Figure 18<br>
Custom blocks for yes and no constants</h5>

<h5><img alt="Figure 19" src="https://raw.githubusercontent.com/IowaDave/pxt-constants/gh-pages/images/Figure%2019.png"><br>
Figure 19<br>
The yes and no blocks are diamond-shaped, like the true and false logic blocks</h5>

<h4>REVIEW</h4>

<p>MakeCode blocks do not directly implement the <code>const</code> keyword from JavaScript. You cannot create a constant value directly in Blocks.</p>

<p>If you declare a <code>const</code> directly in the main JavaScript window, it will enjoy JavaScript&rsquo;s protection as a constant for as long as you stay in JavaScript. However, MakeCode will change <code>const</code> to <code>let</code> when you switch to blocks, transforming your intended constant into a variable.</p>

<p>A custom block is one way to attach a value to a name that functions like a constant. Your code can use it like a variable yet the blocks cannot easily reassign the name to another value.</p>

<p>There might be other ways to achieve the same result. The approach we demonstrate in this article has appeal because it uses a method that MakeCode provides for the purpose.</p>

<p>You can load a MakeCode editor into your browser with code already typed in for the custom blocks described above. Click the following link to access the code.</p>

<a href="https://makecode.microbit.org/#pub:_1wHWrFeLaF10">https://makecode.microbit.org/#pub:&#95;1wHWrFeLaF10</a>

<p>A MakeCode extension package accompanies this article. It contains these custom blocks plus all the other Math constants built into JavaScript. You can choose to load the extension package into your project, bypassing the need to create the custom blocks yourself. The steps to do this are:</p>

<ol>
	<li>Click the gear icon in the upper-right area of the MakeCode editor</li>
	<li>Choose Extensions from the menu that drops down</li>
	<li>A text box will appear in the upper area of the MakeCode editor. Copy the following url and paste it into the text box: <a href="https://github.com/IowaDave/pxt-constants">https://github.com/IowaDave/pxt-constants</a></li>
</ol>

<p>A text box will appear that is mostly empty, except for the title, &ldquo;constants&rdquo;, and a notice that user-provided extensions are not &ldquo;endorsed&rdquo; by Microsoft. Click the text box if you choose to go ahead and install the extension in your project.</p>

<p>By the way, you can view the code for the extension package before you decide whether to include it in your project. Paste the link given in step 3, above, into a new browser window, or simply click the link. It will connect you to the master repository for the extension package. The relevant code is in the file named &ldquo;main.ts&rdquo;. Click on the file name to view the code.</p>

<p>You can use the code in the extension package as examples for writing other custom constant blocks that you create in the custom.ts file of your project.</p>

<p>The syntax for custom blocks is important. Follow the examples in this article closely when creating your own custom constants. A little bit of trial and error can go a long way toward better understanding. Complete documentation about custom blocks begins at the following website:</p>

<a href="https://makecode.microbit.org/blocks/custom">https://makecode.microbit.org/blocks/custom</a>

<p><em>Dear Experts: True, JavaScript (to be completely correct, Static TypeScript) does in fact provide a special, built-in constant named PI in the Math module. It is the value that should be used in calculations because it carries pi out to the full precision available in MakeCode.</em></p>

<p><em>Alas, the Math group of blocks does not make it available by default.</em></p>

<p><em>With a bit of tricky coding this built-in constant can be coaxed into appearing as a gray block. Afterward, the gray block can be re-used by copying and pasting.</em></p>

<p><em>This article focuses on how to create constant-valued custom blocks having any value the user chooses to assign. We selected pi as an example, and showed how to assign it the very precise value of Math.PI.</em></p>

<p><em>We leave it as an exercise for advanced readers to figure out how to utilize the built-in constant for pi as a gray block, if they wish.</em></p>
