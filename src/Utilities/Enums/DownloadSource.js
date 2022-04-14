class DownloadSource {
    static AppleStoreMac = new DownloadSource("images/DownloadMacEn.svg");
    static AppleStore = new DownloadSource("images/DownloadiOSEn.svg");
    static GoogleStore = new DownloadSource("images/DownloadGoogle.png");
    
    constructor(url) {
        this.url = url;
    }
}
export default DownloadSource;