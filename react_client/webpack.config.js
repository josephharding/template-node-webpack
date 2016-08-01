var path = require('path');
module.exports = {
   	resolve: {
		modulesDirectories: ["node_modules", "components"],
		extensions: ['', '.js', '.jsx']
	},
	entry: path.resolve(__dirname, 'entry.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './bundle.js'
    },
    module: {
        loaders: [
			{
				test: /\.js/, 
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets:['es2015', 'react']
				}
			}
		]
    },
};
