function getHighlightedText() {
  return window.getSelection().toString();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getHighlightedText") {
    sendResponse({ text: getHighlightedText() });
  }
});
