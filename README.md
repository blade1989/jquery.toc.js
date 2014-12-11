#jquery.toc.js


jquery.toc.js, an automatic table of contents script. there is no css, for this, you will have the option to style it the way you want it. 

The Table of Content will be put in the `article` tag, including tocbutton. You can change that by renaming the `article` tag to anything you want: body, div, span etc. Jquery allows selectors, such as `div#toc`, `div.toc`.

 [`$("article").prepend(index);`](https://github.com/blade1989/jquery.toc.js/blob/master/jquery.toc.js#L58), and alos the tocbutton: [`$("article").prepend(tocbutton);`](https://github.com/blade1989/jquery.toc.js/blob/master/jquery.toc.js#L74)

When you don't want to display the ToC anymore, press the tocbutton: `[-]`. Nothing is `display: none;` but `.remove();`, or `.removeAttr`. It will remove the added `id=` to the headers, and the Table Of Content itself. and add the tocbutton: `[+]`. 

#jquery.toc.full.js


This has the css in it. When added to your site, it will add a `style` tag in the `head` tag. Of cource these will also be cleaned up, when they are not needed!

##Browser support

This script is writen with the help of Jquery, so when when it comes to browsers support:

> Both versions 1.x and 2.x of jQuery support "current-1 versions" (meaning the current stable version of the browser and the version that preceded it) of Firefox, Google Chrome, Safari, and Opera. Version 1.x also supports Internet Explorer 6 or higher. However, jQuery version 2.x dropped Internet Explorer 6–8 support (which represents less than 28% of all browsers in use) and supports only IE 9 and later versions. [jQuery #Browser support - Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/JQuery#Browser_support).

##Paragraphs Support

I'm working on a more detailed jquery.toc.js, that includes paragraph support. In the future maybe more, if i can find out a way to incorporate them properly! 

##Double Headers Names


Double headers are not supported and not recommended! 

##body Not Body Onload="OnLoad()"


if you want the index to load in the `body` tag, it will search for exactly that. Not `<body onload="Onload">`.

##Reference


 - [css-tricks.com: Automatic Table of Contents | CSS-Tricks](http://css-tricks.com/automatic-table-of-contents/)
 - [stackoverflow.com: How to troubleshoot the following js index script](http://stackoverflow.com/q/27065444/1148529)
