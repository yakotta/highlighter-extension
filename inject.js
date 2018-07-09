// Adds .yakottaHighlighter to <body> tag if not already present
var bodyElement = document.getElementsByTagName("body")[0];
if(!bodyElement.classList.contains('yakottaHighlighter')){
    bodyElement.classList.add('yakottaHighlighter');
}

// Determines the selected text
document.onmouseup = function() {
    var selection = document.getSelection();
    selection = getSelectedText(color);
};

// Finds the text selected in the page, spans it, and gives it a class
function getSelectedText(inputColor) {
    var span = document.createElement("span");
    span.setAttribute('class', inputColor);

    if (document.getSelection) {
        var selection = document.getSelection();
        if (selection.rangeCount) {
            var range = selection.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}