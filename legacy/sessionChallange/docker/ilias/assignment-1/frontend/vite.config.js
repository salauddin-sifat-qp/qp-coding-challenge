"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var vite_1 = require("vite");
var plugin_react_swc_1 = require("@vitejs/plugin-react-swc");
var vite_plugin_node_polyfills_1 = require("vite-plugin-node-polyfills");
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_react_swc_1.default)(),
        (0, vite_plugin_node_polyfills_1.nodePolyfills)({
            protocolImports: true, // Enable specific polyfills
        }),
    ],
    resolve: {
        alias: {
            "@": path_1.default.resolve(__dirname, "./src"),
        },
    },
});
