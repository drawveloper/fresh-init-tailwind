import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
import { createRequire } from "std/node/module.ts";
const require = createRequire(import.meta.url);
const { theme } = require("../tailwind.config.js");

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme,
};
if (IS_BROWSER) setup(config);
