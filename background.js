/* This script handles events made by html-check.js, and events that are fired by the user,
like reloading the tab, or receiving a message from html-check.js. */

let matchurl = ["://sso.fhsdschools.org/"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    for (let i in matchurl) {
        chrome.runtime.sendMessage({wakeup:"wakeupnow"});
        if (tab.url.includes(matchurl[i])){
            console.log("On clever!");
            console.log(tabId);
            chrome.action.setIcon({
                path: {
                    "128": "cleverbomb.png"
                }
            });
            chrome.action.setPopup({
                popup: "index.html"
            });
        }
        else {
            console.log("Not on clever!");
            console.log(tabId);
            chrome.action.setIcon({
                path: {
                    "128": "cleverbomb-disabled.png"
                }
            });
            chrome.action.setPopup({
                popup: ""
            });
        }
        chrome.runtime.onMessage.addListener(function() {
            console.log("Waking up");
        })
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.pressed = "start") {
        var lastthree = chrome.storage.sync.get("passbox");
        var username chrome.storage.sync.get("userbox");
        console.log("Injecting hack.js with credentials:");
        console.log("Username:" + username);
        console.log("Last three digits:" + lastthree);
        chrome.scripting.executeScript({
            files: ['main.js']
        });
    }
});
