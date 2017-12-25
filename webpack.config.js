


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
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },{
            	test: /\.(woff|svg|eot|ttf)\??.*$/,
            	use: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
            	
            }
        ]
    },
    devServer: {
        port: 8090,
        open: true
    }

}

module.exports = config;