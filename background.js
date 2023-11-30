let matchurl = ["://sso.fhsdschools.org/"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    for (let i in matchurl) {
        if (tab.url.includes(matchurl[i])){
            console.log("On clever!")
            console.log(tabId);
            chrome.browserAction.enable(tabId);
            chrome.browserAction.setIcon(
                "cleverbomb.png"
            );
        }
        else {
            console.log("Not on clever!")
            console.log(tabId);
            chrome.browserAction.disable(tabId);
            chrome.browserAction.setIcon(
                "cleverbomb-disabled.png"
            );
        }
    }
})