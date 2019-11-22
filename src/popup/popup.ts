class SearchChromeHistory {
    private sb: HTMLButtonElement;

    constructor() {
        this.sb = document.getElementById('onSearch') as HTMLButtonElement;
        this.sb.onclick = this.onSearch;
    }

    private onSearch() {
        const startTime = new Date((document.getElementById('startTime') as HTMLInputElement).value).getTime();
        const endTime = new Date((document.getElementById('endTime') as HTMLInputElement).value).getTime();
        const maxResults = Number((document.getElementById('maxResults') as HTMLInputElement).value);

        const searchQuery = {
            text: '',
            startTime,
            endTime,
            maxResults,
        };

        chrome.runtime.sendMessage({searchQuery: searchQuery});
    }
}

window.onload = () => {
    const searchChromeHistory = new SearchChromeHistory();
};
