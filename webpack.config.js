const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlAfterWebpackPlugin = require("./HtmlAfterWebpackPlugin.js");
module.exports={
    entry:{
        "index-index": "./project/src/views/index.entry.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./project/src/views/index.html" //不止可以指定html，还可以指定js
        }),
        new htmlAfterWebpackPlugin()
    ]
}