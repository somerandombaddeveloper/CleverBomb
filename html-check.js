document.getElementById('hacksubmit').onclick(function(){
    chrome.runtime.sendMessage({"pressed": "start"});
});