chrome.runtime.onMessage.addListener(function(message, callback){
    if (message.text == "starthack"){
        chrome.tabs.executeScript({
            file: 'main.js'
        });
    };
});