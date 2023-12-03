var hacksubmit = document.getElementById('hackSubmit');
var link1 = document.getElementById('githublink');

hacksubmit.onclick = function(){
    console.log("html-check.js confirmed...");
    chrome.runtime.sendMessage({"pressed": "start"});
}

githublink.onclick = function() {
    console.log("Redirecting...");
    chrome.tabs.create({url: "https://github.com/somerandombaddeveloper/cleverbomb"})
}