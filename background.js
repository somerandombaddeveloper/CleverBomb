chrome.runtime.onMessage.addListener(function(message){
    if (message == "starthack"){
        chrome.tabs.executeScript({
            file: 'main.js'
        });
    };
});