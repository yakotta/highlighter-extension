// Adds .yakottaHighlighter to <body> tag when the page loads
$(document.body).addClass("yakottaHighlighter");

function getSelectedText() {
    var selection = window.getSelection();
    console.log(selection);
    return selection;
}

document.onmouseup = function() {
    document.getElementById("textbox").innerHTML = getSelectedText();
  };