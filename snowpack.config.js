const { buildPath, rootPath, devHost, devPort, devProtocol } = require("./scripts/build.config");

/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: rootPath,
    mount: {
        src: "/"
    },
    plugins: [
        "@snowpack/plugin-typescript",
        "snowpack-plugin-less",
        "@snowpack/plugin-react-refresh"
    ],
    routes: [
        { match: "routes", src: ".*", dest: "../examples/index.html" }
    ],
    devOptions: {
        open: "none",
        hostname: devHost,
        port: devPort,
        secure: devProtocol === "https"
    },
    buildOptions: {
        out: buildPath
    },
    optimize: {
        bundle: true,
        minify: true,
        target: "es2017",
        manifest: false
    }
};
