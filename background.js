let matchurl = ["://sso.fhsdschools.org/"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    for (let i in matches) {
        if (tab.url.includes(matches[i])){
            chrome.browserAction.enable(
                tabId
            )
        }
        else {
            chrome.browserAction.disable(
                tabId
            )
        }
    }
})