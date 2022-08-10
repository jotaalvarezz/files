const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    /* entry: "./resources/js/app.js",
    output: {
        filename: "./public/javascripts/bundle.js",
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader",
        }, ],
    }, */
});