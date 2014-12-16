#jquery.toc.js

jquery.toc.js, an automatic table of contents script. there is no css, for this, you will have the option to style it the way you want it. 

The Table of Content will be put in the `article` tag, including tocbutton. You can change that by renaming the `article` tag to anything you want: body, div, span etc. Jquery allows selectors, such as `div#toc`, `div.toc`.

 [`$("article").prepend(index);`](https://github.com/blade1989/jquery.toc.js/blob/master/jquery.toc.js#L58), and also the tocbutton: [`$("article").prepend(tocbutton);`](https://github.com/blade1989/jquery.toc.js/blob/master/jquery.toc.js#L74)

When you don't want to display the ToC anymore, press the tocbutton: `[-]`. Nothing is `display: none;` but `.remove();`, or `.removeAttr`. It will remove the added `id=` to the headers, and the Table Of Content itself. and add the tocbutton: `[+]`. 

#jquery.toc.full.js

This has all the style needed and will load them in a style tag in the `head`. When the tocbutton is clicked `[+]`, it will add the needed css files and apply id's to the headers. When you click the tocbutton `[-]` it will remove everything, not onclick `display: none;` but onclick `.remove();`. or `removeAttr`, it cleans itself **completely**.

##[Demo jquery.toc.js/](http://www.eurobytes.nl/demos/jquery.toc.js/)

This real life demo displays what the current version(0.1) can do.

##Browser support

This script is writen with the help of Jquery, so when when it comes to browsers support:

> Both versions 1.x and 2.x of jQuery support "current-1 versions" (meaning the current stable version of the browser and the version that preceded it) of Firefox, Google Chrome, Safari, and Opera. Version 1.x also supports Internet Explorer 6 or higher. However, jQuery version 2.x dropped Internet Explorer 6–8 support (which represents less than 28% of all browsers in use) and supports only IE 9 and later versions. [jQuery #Browser support - Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/JQuery#Browser_support).

##Paragraphs Support

I'm working on a more detailed jquery.toc.js, that includes paragraph support. In the future maybe more, if i can find out a way to incorporate them properly! 

##Double Headers Names

Double headers are not supported and not recommended! 

##body Not Body Onload="OnLoad()"

If you edited the `.prepend` section, then you need to be exact. So, if you typ in the `body` tag, it will search for exactly that, not `<body onload="Onload">`.

##Reference

 - [css-tricks.com: Automatic Table of Contents | CSS-Tricks](http://css-tricks.com/automatic-table-of-contents/)
 - [stackoverflow.com: How to troubleshoot the following js index script](http://stackoverflow.com/q/27065444/1148529)
