export class Page {

    constructor() {
        this.url = 'https://mega.nz/';
    }

    open(path) {
        browser.url(this.url + path);
    }

    scrollTo(element) {
        browser.execute( (y) => {
            window.scrollTo(0, Number(y));
        }, element.getLocation('y'));
    }

    maximize() {
        browser.windowHandleFullscreen();
    }

}
