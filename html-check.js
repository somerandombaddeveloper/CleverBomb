var hacksubmit = document.getElementById('hackSubmit');

hacksubmit.onclick = function(){
    console.log("html-check.js confirmed...");
    chrome.runtime.sendMessage({"pressed": "start"});
}