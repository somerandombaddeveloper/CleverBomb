let matchurl = ["://sso.fhsdschools.org/"];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    for (let i in matchurl) {
        if (tab.url.includes(matchurl[i])){
            console.log("On clever!");
            console.log(tabId);
            chrome.action.setIcon({
                path: {
                    "128": "cleverbomb.png"
                }
            });
            chrome.action.setPopup({
                path: "index.html"
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
                path: {
                    ""
                }
            })
        }
    }
})