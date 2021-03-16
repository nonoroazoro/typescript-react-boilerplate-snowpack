const { buildPath, rootPath, devHost, devPort, devProtocol } = require("./scripts/build.config");

/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: rootPath,
    mount: {
        src: "/",
        examples: { url: "/", static: true }
    },
    plugins: [
        "@snowpack/plugin-react-refresh",
        "@snowpack/plugin-typescript",
        "snowpack-plugin-less"
    ],
    devOptions: {
        open: "none",
        hostname: devHost,
        port: devPort,
        secure: devProtocol === "https"
    },
    routes: [
        { match: "routes", src: ".*", dest: "/index.html" }
    ],
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
