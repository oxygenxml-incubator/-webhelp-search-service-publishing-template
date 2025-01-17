const path = require('path');
// Use for production.
const distFolder = path.resolve(__dirname, '../../js');

module.exports = {
	entry: { //location of your main js file
		algolia: './app/main.js'
	},
    output: {
        path: distFolder,
        filename: '[name].js',  // where js files would be bundled to
    },
    module: {
	    rules: [
	        {
	            test: /\.js$/, //using regex to tell babel exactly what files to transcompile
	            exclude: /node_modules/, // files to be ignored
	            use: {
	                loader: 'babel-loader' // specify the loader
	            } 
	        },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
 } 