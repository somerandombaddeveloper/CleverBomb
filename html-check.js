/*This script handles events on index.html
to not have an issues related to the background script,
or content script. */

var hacksubmit = document.getElementById('hackSubmit');
var link1 = document.getElementById('githublink');
var inputu;
var inputp;


hacksubmit.onclick = function(){
    //Gets data from popup input boxes to use in bruteforce
    inputu = chrome.storage.sync.set({"userbox":link1.value});
    inputp = chrome.storage.sync.set({"passbox":hacksubmit.value});
    console.log("html-check.js has confirmed button click. Sending data to service worker...");
    chrome.runtime.sendMessage({"pressed": "start"});
    inputp = document.getElementById('');
    inputu = document.getElementById('');
}

githublink.onclick = function() {
    console.log("Redirecting...");
    chrome.tabs.create({url: "https://github.com/somerandombaddeveloper/cleverbomb"});
}
