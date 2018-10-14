module.exports = {

    watch: false,
    watchTags: '@watch, @focus, @login, @cars',
    path: './features/',
    format: 'pretty',
    tags: ['~@ignore', '~@pending'],
    webdriverio: {
        waitforTimeout: 20000
    }

}
