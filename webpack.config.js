
module.exports = {
       module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
        ]
    }
}