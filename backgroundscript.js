var aktief = 0;


browser.browserAction.onClicked.addListener((tab) => {

    aktief = !aktief;

    browser.storage.local.set({
        comicsansyay: {aktief}
    })

    console.log(`web beatutifcation set to ${aktief}`);
  
    browser.browserAction.setIcon({
        path: aktief ? "icons/sunflower.svg" : "icons/poop.svg"
      });
});