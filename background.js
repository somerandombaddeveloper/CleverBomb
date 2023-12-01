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

document.getElementById('creds').onclick(function() {
    console.log("Injecting hack.js...")
    chrome.scripting.executeScript({
        files: ['main.js']
    });
});
