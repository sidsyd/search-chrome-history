module.exports = {
    mode: 'development',
    entry: {
        'popup/popup': './src/popup/popup.ts',
        'background/background': './src/background/background.ts',
        'content_scripts/content_script': './src/content_scripts/content_script.ts'
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/extension/`
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: [
            '.ts'
        ]
    }
};