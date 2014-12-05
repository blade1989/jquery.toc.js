/**************************************************
Author      : Imri Paloja
Email       : imri.paloja@gmail.com
HomePage    : www.eurobytes.nl
Version     : 0.1
Name        : index.js
Description : Automatic index
**************************************************/

/*          Notes

    1.  If a header has the same name - which is not recommended - 
        the script will apply the id's twice. Therefore clicking to 
        the second header with the same id will not work!

            Possible fix:
            setInterval(function() {
                var number = 1 + Math.floor(Math.random() * 100);
                $('id').text(number);
            });
            
    2.  The script needs a `body` not `<body onload="onLoad()">`. 
        It will not work without!

*/

// When clicked on the tocbutton, the following will be excecuted:
function index() {
    var index =
        "<ul id=\"IndexJS\" style=\"display: block;\">" +
        "<li id=\"tocid\">Table of Content <button id=\"closetoc\" onclick=\"closetoc()\">[-]</button></li>";

    // searches every tag you put in here
    $("h1, h2, h3, h4, h5, h6").each(function() {

        el = $(this);
        title = el.text();
        id = "#" + el.text().replace(/\s/g, ""); // get the content of the header tags removes spaces and puts a # in front of it.
        hid = el.text().replace(/\s/g, ""); // get the content of the header tags
        el.attr('id', "" + hid + ""); // applies the header content in the id tag.

        lHeaders =
            "<li>\n" +
            "<a href='" + id + "' title='" + title + "' >" + title +
            "</a>\n" +
            "</li>\n";

        index += lHeaders;

    });

    index +=
        "</li>" +
        "</ul>";

    // This will put the list of headers, in the article tag. 
    // Rename to where you would like it to appear!
    $("article").prepend(index);

    //$('#toc').attr('style', 'display: none;');
    $('#toc').remove();
    $('#tocbuttonstyle').remove();

}

window.onload = index;


function closetoc() {
    $("#IndexJS").remove();

    var tocbutton =
        "<button onclick=\"index()\" id=\"toc\" title=\"Table Of Contents\">[+]</button>";
    $("article").prepend(tocbutton);
    $('h1, h2, h3, h4, h5, h6').removeAttr('id');
}
