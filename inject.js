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