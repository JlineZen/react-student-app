var webpack = require('webpack');
var path = require('path');
var context = path.join(__dirname, '/');

module.exports = {
    context: context,
    entry: './src/app.js',
    output: {
		path: path.join(__dirname, './dist'),
		filename: "bundle.js"
	},
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: false
        })
    ],
    resolve: {
	    modulesDirectories: [
	      'node_modules'
	    ]
	} 
};