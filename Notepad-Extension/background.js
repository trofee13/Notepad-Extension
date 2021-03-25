chrome.runtime.onInstalled.addListener(function () {
    const item = {
        notepad: 'Welcome to <b>Notepad</b>!&nbsp;<div><br></div><div>Text will be automatically saved every time a key is pressed.</div>',

        get document() {
            return this._document;
        },
        set document(value) {
            this._document = value;
        },
        text: 'black',
        background: 'white'
    };
    chrome.storage.local.set(item, function () {
        console.log("Notepad initialized", item);
    });
});