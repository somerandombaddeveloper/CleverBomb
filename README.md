![image](https://github.com/somerandombaddeveloper/CleverBombHack/assets/106110368/ace462b6-6ead-443a-a3c2-59da74e853f2)
# CleverBombHack
A web browser extension that allows fast and easy passguessing for the FHSD Clever sign-on page. This extension was designed for Active Directory.
## Instructions
### Downloading the extension
Go to the latest release and download either "CleverBomb-chromium.zip" or "CleverBomb-firefox.xpi", depending on which browser you have. *(CleverBomb-chromium.crx for browsers based on chromium like edge and chrome, and CleverBomb-firefox.xpi for firefox.)* Currently, for the Chromium file, you can't install it on a chromebook, due to how automatic installation can screw things up.
### Installation
**Chromium-based instructions:** Enable developer mode on the extensions management page, and drag the .crx file into the window. It should appear in your extensions toolbar shortly after.
###
**Firefox instructions:** Go to about:addons, then click the gear icon, and select "Install from File", and select "CleverBomb.xpi."
### Using the extension
Once you install the extension, pin it to your extensions or addons toolbar. Click on the icon that looks like a greyed-out Clever logo when you are on the sign on page, enter the person you wish to hack's credentials. Here is an example of the username syntax: "*fhsd.local\jdoe123*". You **MUST** include "fhsd.local\", or else you will get an error on the sign on page. For the field labeled "Last Three Digits", enter the user's last three digits of their lunch number. Once all of these fields have been filled, click the "Start" button, and wait.
### Getting the credentials
The page should reload to the Clever portal. Once this has happened, click the button labeled "View Previous Credentials" to view the last attempted credentials before the page redirected to the portal. **If you attempt another bruteforce, these credentials will be changed.** If the credentials do not work on another sign-on page, try changing the number by intervals of 1.
### Troubleshooting and errors
If the page doesn't redirect to the Clever portal, you might have entered one of the credentials in the extension wrong. Please try again with different ones, and make sure you didn't make a typo.
## Developers and contributors
