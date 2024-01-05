/*This script is used when it is injected into Clever.
It is ran when the "start" button is clicked
on the main popup. The script is unable to interact with the popup
input boxes, so arguments have to be passed to it. */

console.log("Injection complete.");
var timeout;
var username;
var lastthree;
chrome.storage.sync.get("userbox", function(data1) {
	username = data1.userbox;
})
chrome.storage.sync.get("passbox", function(data2) {
	lastthree = data2.passbox;
})
console.log("Confirming bruteforce with credentials:");
console.log("Username: " + username);
console.log("Password: " + lastthree);
//edits properties of password input so user can see what password is being attempted
var form = document.getElementById('loginForm');
var formButton = document.getElementById('submitButton');
var formUsername = document.getElementById('userNameInput');
var formPassw = document.getElementById('passwordInput');
var breakHack = "Replace with chrome.storage.sync.get when ready";
var running;
//continues until clever screws up, or it finds the password :)
//changes type attribute of password box to make it easier to debug
formPassw.type = "";
console.log('Script injection confirmed.');
var haspassword = false;
var numbertry = 0;
var numbertrytostr = null;
for (var numbertry = 0; numbertry <= 999; numbertry++) {
	console.log('for');
	runhack();
	//breaks if stop button is clicked
	if (breakHack == "abort") {
		console.info("Hack aborted.");
	}
	var running = true;
	//add switch statement in hack function to handle errors.
}

function runhack() {
	setInterval(hack, 4000);
}

function hack(numbertryarg) {
	console.info('function hack() ran');
	
}
