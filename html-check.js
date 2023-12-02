document.getElementById('hacksubmit').onclick(function(){
    console.log("html-check.js confirmed...")
    chrome.runtime.sendMessage({"pressed": "start"});
});