chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.searchQuery) {
        var ul = document.getElementById('historySearchResults') as HTMLElement;
        var list = '';
        chrome.history.search(request.searchQuery, (historyItems) => {
            historyItems.forEach(historyItem => {
                let title = historyItem.title as string;
                let href = historyItem.url as string;
                if (title) {
                    let aTag = document.createElement('a');
                    aTag.href = href;
                    aTag.innerHTML = title;
                    let li = document.createElement('li');
                    li.appendChild(aTag);
                    ul.appendChild(li);
                }
            });
        });
    }
})
