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

    // Saves the color's name in local storage
    chrome.storage.sync.set({'radioChecked': color});

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

// Keeps the radio buttons persistently checked using the local storage data 
chrome.storage.sync.get(['radioChecked'], function(result) {
    document.getElementById(result.radioChecked).setAttribute("checked", "checked");
});