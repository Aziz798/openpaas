import globals from "globals";
import pluginJs from "@eslint/js";
import pluginSolid from "eslint-plugin-solid";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["src/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            solid: pluginSolid,
            "@typescript-eslint": pluginTypescript,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            ...pluginSolid.configs.recommended.rules,
            "no-unused-vars": "warn",
            "solid/prefer-show": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "no-console": "warn",
        },
    },
];
