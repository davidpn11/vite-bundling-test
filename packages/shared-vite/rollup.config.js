import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import url from "rollup-plugin-url";
import del from "rollup-plugin-delete";

export default [
  {
    input: ["src/index.ts"],
    output: {
      exports: "named",
      dir: "build",
      format: "esm",
      name: "shared-vite",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "styled-components": "createGlobalStyle",
        // eslint-disable-next-line no-dupe-keys
        "styled-components": "styled",
        "@popperjs/core": "createPopper",
        "@popperjs/core": "Placement",
      },
    },
    plugins: [
      external(),
      del({ targets: ["build/*"] }),
      typescript(),
      url({
        include: ["**/*.woff", "**/*.woff2"],
        limit: Infinity,
      }),
    ],
    preserveModules: true,
  },
];
