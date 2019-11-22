chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.searchQuery);
    if (request.searchQuery) {
        chrome.tabs.create({
            url: chrome.runtime.getURL('./result.html')
        }, (tab) => {
            chrome.tabs.onUpdated.addListener((tabId, info) => {
                if (info.status === 'complete' && tabId === tab.id) {
                    chrome.tabs.sendMessage(tabId, {searchQuery: request.searchQuery});
                }
            })
        });
    }
})
