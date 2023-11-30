let matchurl = ["://sso.fhsdschools.org/"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    for (let i in matchurl) {
        if (tab.url.includes(matchurl[i])){
            console.log("On clever!")
            chrome.browserAction.enable();
            chrome.browserAction.setIcon(
                "cleverbomb.png"
            );
        }
        else {
            console.log("Not on clever!")
            chrome.browserAction.disable();
            chrome.browserAction.setIcon(
                "cleverbomb-disabled.png"
            );
        }
    }
})