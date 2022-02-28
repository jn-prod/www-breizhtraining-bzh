module.exports = {
    configureWebpack: config => {
        config.output.filename = 'js/[name].min.js'
        config.output.chunkFilename = 'js/[name].min.js'
        config.devServer = {
            proxy: {
              '/prod/': {
                target: 'https://sheets.googleapis.com',
                ws: true,
              }
            }
        }
    }
}