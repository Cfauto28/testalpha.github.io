"use strict";

// Top Part

var jslogin = document.createElement('div');
jslogin.className = "login";
jslogin.innerHTML = "Please log in here with your Minecraft account to enable download links.<br><br>";
document.getElementById("loginspace").appendChild(jslogin);

//Bottom Part

var jslogin2 = document.createElement('div');
jslogin2.className = "login2";
if (navigator.userAgent.endsWith("Trident/7.0; rv:11.0) like Gecko")){
    jslogin2.innerHTML = "Unable to initialize the ActiveX control.<br>Check if the main servers are online<br>Also try refreshing the page.";
} else {
  jslogin2.innerHTML = "Unable to initialize login prompt.<br>Check if your browser supports NPAPI <br>Also try refreshing the page.";
}
jslogin.appendChild(jslogin2)

