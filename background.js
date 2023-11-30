let matchurl = ["://sso.fhsdschools.org/"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    for (let i in matchurl) {
        if (tab.url.includes(matchurl[i])){
            chrome.browserAction.enable(
                tabId
            );
            chrome.browserAction.setIcon(
                "cleverbomb.png"
            );
        }
        else {
            chrome.browserAction.disable(
                tabId
            );
            chrome.browserAction.setIcon(
                "cleverbomb-disabled.png"
            );
        }
    }
})