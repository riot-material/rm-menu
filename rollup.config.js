const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const typescript = require("@rollup/plugin-typescript");
const terser = require("rollup-plugin-terser").terser;

const globals = {
    "@riot-material/elevation": "riotMaterial.elevation",
    "@riot-material/focus-manager": "riotMaterial.focusManager",
    "@riot-material/ripple": "riotMaterial.ripple"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            riot(),
            // terser()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.menu",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            riot(),
            // terser()
        ],
        output: [
            {
                name: "riotMaterial.components.menu",
                file: "dist/index+libs.js",
                format: "umd"
            }
        ]
    }
];