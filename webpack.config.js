const path = require("path");
const webpack = require("webpack");
var glob = require("glob");

const webpack_rules = [];
const webpackOption = {
    // include all spec files from app/jasmine/spec
    // https://stackoverflow.com/questions/32874025/how-to-add-wildcard-mapping-in-entry-of-webpack/34545812#34545812

    entry: ["babel-polyfill", ...glob.sync("./app/jasmine/spec/*[Sspec].js")],
    output: {
        path: path.resolve(__dirname, "./app/jasmine/dist/"),
        filename: "bundle.js",
    },
    module: {
        rules: webpack_rules
    }
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(babelLoader);
module.exports = webpackOption;
