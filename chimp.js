module.exports = {

    watch: false,
    watchTags: '@watch, @focus, @create',
    path: './features/',
    format: 'pretty',
    tags: ['~@ignore', '~@pending'],
    webdriverio: {
        waitforTimeout: 20000
    }

}
