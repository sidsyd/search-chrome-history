chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.searchQuery) {
        const ul = document.getElementById('historySearchResults') as HTMLElement;
        const li: string[] = [];
        chrome.history.search(request.searchQuery, (historyItems) => {
            historyItems.forEach(historyItem => {
                let title = historyItem.title as string;
                let href = historyItem.url as string;
                if (title) {
                    li.push(
                        '<li><a href=' + href + '>' + 
                        title +
                        '</a></li>'
                    );
                }
            });
            ul.innerHTML = li.join('');
        });
    }
})
