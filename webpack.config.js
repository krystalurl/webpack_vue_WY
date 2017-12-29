


var path = require("path");
const config = {

    entry: './src/start.js',
    output: {
    			 // 这个名字要和上面的名字一致
        filename: 'start.js',
        path: path.resolve(__dirname,'./build')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
            	test: /\.(png|jpg|svg)$/, 
            	loader: 'url-loader?limit=2048',
            },
            {
            	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        		loader: 'url-loader',
            	/*options: {
            		limit:50000,
            		name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            	}*/
            }
        ],
    },
    
    devServer: {
        // host: '192.168.0.236',
        port: 8090,
        open: true
    }

}

module.exports = config;