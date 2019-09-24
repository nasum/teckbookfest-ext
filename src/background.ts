chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.pageAction.show(tabId);
});