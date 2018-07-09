// Adds .yakottaHighlighter to <body> tag
var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.classList.add('yakottaHighlighter');

// Adds an event listener to the extension's popup
document.getElementById("colorSelectButton").addEventListener("click", function(){
    var color;
    var radios = document.getElementById('popup').elements['highlight'];
    for (i=0; i < radios.length; i++){
        if(radios[i].checked){
            color = radios[i].value;
            break;
        }
    }

    color = '"' + color + '"'

    chrome.tabs.executeScript({
        code: 'var color = ' + color
    }, function(){
        chrome.tabs.executeScript({
            file: 'inject.js'
        })
    });
});