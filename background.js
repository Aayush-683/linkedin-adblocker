chrome.onWebNavigationCompleted.onComitted.addListener(function (tab) { // When the user navigates to a new page.

    // If the tab is the main frame
    if (tab.frameId === 0) {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
            // Get the URL of the tab
            let url = tabs[0].url;
            let parsedUrl = new URL(url); // URL object
            let domain = parsedUrl.hostname; // Get the domain of the URL

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    return;
                } else if (domain == "linkedin.com") { // If the domain is LinkedIn then inject the script
                    chrome.tabs.executeScript({ file: "blocker.js" });
                    return true;
                }
            } catch (error) {
                console.log(error);
            }
        });
    }

});