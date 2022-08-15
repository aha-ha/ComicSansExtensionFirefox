function improve_webpage(on) {

    if (on) {
        console.log ("Comic-Sans turned on!")
        // document.getElementsByTagName("body")[0].style.fontFamily = "Comic Sans MS", "Comic Sans";
        document.querySelectorAll("*:not(:empty)").forEach((el) => {el.style.fontFamily = "Comic Sans MS", "Comic Sans"})
    } else {
        console.log ("Comic-Sans turned off!")
        // document.getElementsByTagName("body")[0].style.fontFamily = "";
        document.querySelectorAll("*:not(:empty)").forEach((el) => {el.style.fontFamily = ""})
    }

}

function onGot(status) {
    console.log(status);
    
}  
function onError(error) {
    console.log(`Error: ${error}`);
}
  

browser.storage.local.get("comicsansyay").then(onGot, onError);
browser.storage.local.onChanged.addListener(changes => {

    console.log("Storage changed:", changes);

    if (typeof changes.comicsansyay !== "undefined") {

        console.log("New:", changes.comicsansyay.newValue.aktief);

        improve_webpage(changes.comicsansyay.newValue.aktief);
        
    }
})







/*
window.addEventListener("keydown", function(evt) {
    //console.info(evt.key)
    //console.info("shift: " + evt.shiftKey)
    //console.info("ctrl: " + evt.ctrlKey)
    //console.info("alt: " + evt.altKey)
	if (evt.ctrlKey && evt.shiftKey && evt.altKey && evt.key == "C") {
        onoff = true;
        improve_webpage(true);
	}
    if (evt.ctrlKey && evt.shiftKey && evt.altKey && evt.key == "X") {
        onoff = false;
        improve_webpage(false);
	}
});
*/

window.onload = function() {
    console.log("window wurde angeladen");
    browser.storage.local.get("comicsansyay").then(onGot, onError);
    
        console.log("Storage changed:", changes);
    

    
        console.log("Current:", changes.comicsansyay.newValue.aktief);
    
        improve_webpage(changes.comicsansyay.newValue.aktief);
}
