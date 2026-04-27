"use strict";

let loadedlogin = false
let jslogin = document.createElement('div');
jslogin.className = "login";
jslogin.innerHTML = "Please log in here with your Minecraft account to enable download links. (NPAPI or ActiveX must be supported)<br><br>";
let loginsection = document.querySelector(".mwidthsection")
loginsection.appendChild(jslogin);

function loadlogin() {
    loadedlogin = true;
    let jslogin2 = document.createElement('div');
    jslogin2.className = "login2";
    fancymenu.placeholders.get('playername')
    .then(name => {
        jslogin2.innerHTML = "Connected to main servers.<br>Logged in as " + name + "<br>Using the Ext1605WebApi (NPAPI).<br>Download the launcher to start plaing."
    }).catch(error => console.error(error));
    jslogin.appendChild(jslogin2);
};

window.addEventListener('fancymenu-ready', () => {
        console.log('FancyMenu API is ready');
        if (loadedlogin !== true){
            loadlogin();
        };
});
//if (typeof fancymenu !== 'undefined') {
/*else {
    console.error("Unable to use the fancymenu API falling back...")
    let jslogin2 = document.createElement('div');
    let jslogin = document.createElement('div');
    let parentElement = document.querySelector(".mwidthsection")
    jslogin2.className = "login2";
    jslogin.className = "login";
    jslogin2.innerHTML = "Unable to use the Ext16WebApi.<br>Check if the server are online<br>Try refreshing the page.";
    jslogin.innerHTML = "Please log in here with your Minecraft account to enable download links. (NPAPI or ActiveX support must be enabled)<br><br>"
    parentElement.appendChild(jslogin);
    jslogin.appendChild(jslogin2);
}

/*	<div class="login">
 Please log in here with your Minecraft account to enable download links. (JavaScript must be enabled)<br><br>
 <div class="login2">
 Unable use JavaScript login.<br>
 Check if JavaScript support is enabled in your browser.<br>
 Try refreshing the page.
 </div>
 </div>
*/
