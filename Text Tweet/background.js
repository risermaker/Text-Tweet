chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        function: getHighlightedText,
      },
      (results) => {
        if (results && results.length > 0) {
          const text = results[0].result;
          const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
          chrome.tabs.create({ url: url });
        }
      }
    );
  });
  
  function getHighlightedText() {
    return window.getSelection().toString();
  }