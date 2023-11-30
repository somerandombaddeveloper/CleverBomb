chrome.runtime.onMessage.addListener(function(message){
    if (message == "starthack"){
        chrome.scripting.executeScript({
            file: 'main.js'
        });
    };
});