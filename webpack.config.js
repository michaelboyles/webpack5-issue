module.exports = {
    name: 'Server',
    mode: 'production',
    entry: {
        'handler': './src/handler.ts',
    },
    output: {
        filename: '[name].js',
        library: 'main',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.json"
                    }
                }]
            }
        ]
    }
}