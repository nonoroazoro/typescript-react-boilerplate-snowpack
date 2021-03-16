const { buildPath, rootPath, devHost, devPort, devProtocol } = require("./scripts/build.config");

/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: rootPath,
    mount: {
        examples: "/",
        src: "/"
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
