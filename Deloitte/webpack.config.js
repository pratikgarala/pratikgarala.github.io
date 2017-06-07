/**
 * Created by pratikgarala on 7/6/17.
 */

var path = require('path');
var webpack = require('webpack');


module.exports = {
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "build"),
        port: 3000,
        publicPath : '/',
        historyApiFallback:true,
    },
    devtool: 'source-map',
    entry: './src/js/index.js',
    d3Loader: {
        exclude: ['d3-dont-load-me', 'd3-i-mean-it']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            // {
            //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url?limit=10000&mimetype=image/svg+xml'
            // },
            // {
            //     test: /\.(png|jpg|svg)$/,
            //     loader: 'svg-url-loader?name=assets/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for the rest
            // },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery" })
    ]
};
