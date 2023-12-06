/*This script handles events on index.html
to not have an issues related to the background script,
or content script. */

var hacksubmit = document.getElementById('hackSubmit');
var link1 = document.getElementById('githublink');
var inputu;
var inputp;


hacksubmit.onclick = function(){
    //Gets data from popup to use in bruteforce
    inputu = chrome.storage.sync.set({"userbox":link1.innerHTML});
    inputp = chrome.storage.sync.set({"passbox":hacksubmit.innerHTML});
    console.log("html-check.js has confirmed button click. Sending data to service worker...");
    chrome.runtime.sendMessage({"pressed": "start"});
    inputp = document.getElementById('');
    inputu = document.getElementById('');
    chrome.runtime.sendMessage({"username": inputu.innerHTML});
    chrome.runtime.sendMessage({"password": inputp.innerHTML});
}

githublink.onclick = function() {
    console.log("Redirecting...");
    chrome.tabs.create({url: "https://github.com/somerandombaddeveloper/cleverbomb"});
}
