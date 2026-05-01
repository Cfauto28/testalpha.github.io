"use strict";

let loadedlogin = false
let jslogin = document.createElement('div');
jslogin.className = "login";
jslogin.innerHTML = "Please log in here with your Minecraft account to enable download links.<br><br>";
let loginsection = document.querySelector(".mwidthsection")
loginsection.appendChild(jslogin);
let jslogin2 = document.createElement('div');
jslogin2.className = "login2";

if (navigator.userAgent.includes("Trident")){
    jslogin2.innerHTML = "Unable to initialize the ActiveX control.<br>Check if the main servers are online<br>Also try refreshing the page."
} else {
  jslogin2.innerHTML = "Unable to initialize login prompt.<br>Check if your browser supports NPAPI <br>Also try refreshing the page.";
}
jslogin.appendChild(jslogin2)

function loadlogin() {
    loadedlogin = true;
    jslogin.innerHTML = "Login succeful. Download links enabled. Go to the downloads page the download the and play."
    fancymenu.placeholders.get('playername')
    .then(name => {
        jslogin2.innerHTML = "Connected to main servers.<br>Logged in as " + name + "<br>.Download the launcher to start plaing."
    }).catch(error => console.error(error));;
};

window.addEventListener('fancymenu-ready', () => {
        console.log('FancyMenu API is ready');
        if (loadedlogin !== true){
            loadlogin();
        };
});


/*	<div class="login">
 Please log in here with your Minecraft account to enable download links. (JavaScript must be enabled)<br><br>
 <div class="login2">
 Unable use JavaScript login.<br>
 Check if JavaScript support is enabled in your browser.<br>
 Try refreshing the page.
 </div>
 </div>
*/
