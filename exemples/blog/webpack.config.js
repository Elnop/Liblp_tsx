const path = require('path')
module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
    	path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
  	},
	devServer: {
    	static: {
			directory: path.resolve(__dirname, './dist')
		},
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node-modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			},
			{
                test: /\.(png|jpe?g|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                }
            }
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	}
}