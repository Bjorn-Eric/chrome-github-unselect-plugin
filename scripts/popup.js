document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("select").addEventListener("click", () => handleAction("select"));
  document.getElementById("unSelect").addEventListener("click", () => handleAction("unselect"));
});

function urlMatches(url) {
  return /^https:\/\/github\.com\/[^/]+\/[^/]+\/pull\/\d+\/files/.test(url);
}

function handleAction(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0];
    if (!urlMatches(tab.url)) {
      alert("This extension only works on GitHub PR files pages.");
      return;
    }
    chrome.tabs.sendMessage(tab.id, { action });
  });
}
