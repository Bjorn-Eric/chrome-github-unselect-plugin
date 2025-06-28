chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "select" || request.action === "unselect") {
    const checkboxes = document.querySelectorAll("input.js-reviewed-checkbox");
    checkboxes.forEach(cb => {
      if (request.action === "select" && !cb.checked) cb.click();
      if (request.action === "unselect" && cb.checked) cb.click();
    });
  }
});
