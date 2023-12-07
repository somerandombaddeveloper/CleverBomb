/* This script handles events made by html-check.js, and events that are fired by the user,
like reloading the tab, or receiving a message from html-check.js. */

let matchurl = ["://sso.fhsdschools.org/"];

var actiontab;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	for (let i in matchurl) {
		chrome.runtime.sendMessage({
			wakeup: "wakeupnow"
		});
		if (tab.url.includes(matchurl[i])) {
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
		} else {
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

chrome.browserAction.onClicked.addListener((tabbaction) => {
	actiontab = tabbaction.tabId;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.pressed = "start") {
        //creates string for parameters, then changes background color to red of sign-on page to let user know hack is ready.
		var lastthree2 = chrome.storage.sync.get("passbox");
		var username2 = chrome.storage.sync.get("userbox");
        console.log(codeexec);
		console.log("Injecting hack.js with credentials:");
		console.log("Username:" + username2);
		console.log("Last three digits:" + lastthree2);
        function codeexec(uname, lthree) {
            var username = uname;
            var lastthree = lthree;
        }
		chrome.scripting.executeScript({
            target: {
                tabId: actiontab.tabId
            },
			func: codeexec(username2, lastthree2)
		});
        chrome.scripting.executeScript({
            target: {
                tabId: actiontab.tabId
            },
            files: ['main.js']
        });
        chrome.scripting.insertCSS({
            target: {
                tabId: actiontab.tabId
            },
            css: '.contentWrapper {background-color: #920313;}'
        })
	} else {
		console.log("Irrelevant/unused message received from service worker. Check code to see if any messages are not being used!");
	}
});
