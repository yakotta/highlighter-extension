// Adds an event listener to the extension's popup
document.getElementById("colorSelectButton").addEventListener("click", function(){
    // Determines which color's radio button was clicked
    var color;
    var radios = document.getElementById('popup').elements['highlight'];
    for (i=0; i < radios.length; i++){
        if(radios[i].checked){
            color = radios[i].value;
            break;
        }
    }

    // Puts the color name in quotes so it can be used in chrome.tabs.executeScript
    color = '"' + color + '"'

    // Sends the color information to inject.js to create hilighting behavior
    chrome.tabs.executeScript({
        code: 'var color = ' + color
    }, function(){
        chrome.tabs.executeScript({
            file: 'injection_script.js'
        })
    });
});