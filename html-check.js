document.getElementById('hackSubmit').onclick = function(){
    console.log("html-check.js confirmed...")
    chrome.runtime.sendMessage({"pressed": "start"});
}