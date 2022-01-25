module.exports = {
    devServer: {
        proxy: {
            '/IP': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '/IP': ''
                }
            }
        }
    }
}