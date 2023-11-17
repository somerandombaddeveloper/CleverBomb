chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.exectuteScript({
        target:{
            tabId: tab.id,
        },
        files: ["check.js"],
    });
});
