/**
 * Created by Adebola on 03/02/2016.
 */
var webpack = require('webpack');
var version = require("./package.json").version;
var banner =
    "/**\n" +
    " * vue-countup v" + version + "\n" +
    " * https://github.com/samcrosoft/vue-countup\n" +
    " * MIT License\n" +
    " */\n";

module.exports = {
    entry: './src/index.js',
    output: {
        path:'./dist',
        filename: 'vue-count-up.js',
        library: 'VueCountUp',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin(banner, {raw: true})
    ],
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
}
