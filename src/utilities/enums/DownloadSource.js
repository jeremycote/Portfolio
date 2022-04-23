import downloadMacEn from '../../assets/images/download/DownloadMacEn.svg';
import downloadiOSEn from '../../assets/images/download/DownloadiOSEn.svg';
import downloadGoogle from '../../assets/images/download/DownloadGoogle.png';

class DownloadSource {
    static AppleStoreMac = new DownloadSource(downloadMacEn);
    static AppleStore = new DownloadSource(downloadiOSEn);
    static GoogleStore = new DownloadSource(downloadGoogle);
    
    constructor(url) {
        this.url = url;
    }
}
export default DownloadSource;