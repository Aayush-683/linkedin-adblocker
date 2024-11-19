chrome.webNavigation.onCommitted.addListener(function (details) {
    // Only act if the navigation is in the main frame
    if (details.frameId === 0) {
        try {
            // Parse the URL to extract the domain
            const url = new URL(details.url);
            const domain = url.hostname;

            // Check if the domain is LinkedIn
            if (domain.includes("linkedin.com")) {
                chrome.scripting.executeScript({
                    target: { tabId: details.tabId },
                    files: ["blocker.js"]
                });
            }
        } catch (error) {
            console.error("Error parsing URL or injecting script:", error);
        }
    }
});
