JavaScript is one of the 3 languages all web developers must learn:

   1. HTML to define the content of web pages

   2. CSS to specify the layout of web pages

   3. JavaScript to program the behavior of web pages
   
   =====Learning Speed:====
   
In this tutorial, the learning speed is your choice.

Everything is up to you.

If you are struggling, take a break, or re-read the material.

Always make sure you understand all the "Try-it-Yourself" examples.

The only way to become a clever programmer is to: Practice. Practice. Practice. Code. Code. Code !
===========================================
<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello sdfdfg"'>Click Me!
..........................
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:180px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
............................
<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='100px'">Click Me!</button>
............................
<p id="demo">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
.............................
<p>JavaScript can show hidden HTML elements.</p>

<p id="demo" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>
............................
In HTML, JavaScript code is inserted between <script> and </script> tags.
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
=====================================...........................===================
You can place any number of scripts in an HTML document.

Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
..........................
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.
..........................

Scripts can also be placed in external files:

<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="myScript.js"></script>

</body>
</html>
..........................
Placing scripts in external files has some advantages:

It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads
To add several script files to one page  - use several script tags:
==============================
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

inner HTML
<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

document.write().
document.write(5 + 6);   (Using document.write() after an HTML document is loaded, will delete all existing HTML:).(and should only be used for testing.)

window.alert(5 + 6);      (an alert dialog box displays on page as output) (we can skip the window keyword)

debugging (F12) and console tab

<button onclick="window.print()">Print this page</button>









