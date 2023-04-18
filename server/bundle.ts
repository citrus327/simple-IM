import { rollup, watch, OutputOptions } from "rollup";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import tsTransformPaths from "@zerollup/ts-transform-paths";
import path from "path";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";
import colors from "colors";
import yargs from "yargs";

const r = (subPath: string) => {
  return path.resolve(process.cwd(), subPath);
};

const plugins = [
  resolve(),
  commonjs(),
  json(),
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
  babel({
    babelHelpers: "bundled",
    presets: ["@babel/preset-env"],
  }),
  typescript({
    tsconfig: "./tsconfig.json",
    compilerOptions: {
      sourceMap: true,
    },
    transformers: {
      afterDeclarations: [
        {
          // @ts-ignore
          type: "program",
          // @ts-ignore
          factory: (program) => {
            const transformer = tsTransformPaths(program);
            return transformer.afterDeclarations;
          },
        },
      ],
    },
  }),
];

const resolveOptions = () => {
  return defineConfig({
    input: path.resolve(process.cwd(), "./app/index.ts"),
    output: {
      file: path.resolve(process.cwd(), "./dist/index.mjs"),
      format: "esm",
      exports: "named",
      sourcemap: "inline",
    },
    plugins: [
      ...plugins,
      external({
        includeDependencies: true,
      }),
    ],
  });
};

const build = async () => {
  try {
    const options = resolveOptions();
    if (Array.isArray(options)) {
      await Promise.all(
        options.map(async (option) => {
          let bundle = await rollup(option);
          await bundle.write(option.output as OutputOptions);
          bundle && (await bundle.close());
        })
      );
    } else {
      let bundle = await rollup(options);
      await bundle.write(options.output as OutputOptions);
      bundle && (await bundle.close());
    }
    process.exit(0);
  } catch (e) {
    process.exit(1);
  }
};

const dev = async () => {
  const exe = async (command: "server") => {
    const watcher = watch(resolveOptions());
    let color = "yellow";
    console.log(colors[color].bold(`[${command.toUpperCase()}] Watching...`));
    watcher.on("event", (e) => {
      if (e.code === "BUNDLE_START") {
        console.log(
          colors[color].bold(`[${command.toUpperCase()}] Bundling...`)
        );
      }
      if (e.code === "ERROR") {
        e.result?.close();
        console.log(
          colors.red.bold(`something wrong when bundling ${command} build`)
        );
        console.error("e", e.error);
      }
      if (e.code === "BUNDLE_END") {
        e.result?.close();
      }
      if (e.code === "END") {
        console.log(colors[color].bold(`[${command.toUpperCase()}] Done!`));
      }
    });
  };

  exe("server");
};

yargs
  .scriptName("bundler")
  .command("build", "build", build)
  .command("dev", "dev", dev)
  .help().argv;
