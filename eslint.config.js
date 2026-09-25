import js from "@eslint/js";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import lwcPlugin from "@lwc/eslint-plugin-lwc";
import jestPlugin from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	js.configs.recommended,
	{
		files: ["src/**/*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.browser,
			},
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					parserOpts: {
						plugins: [
							"classProperties",
							["decorators", { decoratorsBeforeExport: false }],
						],
					},
				},
			},
		},
		plugins: {
			"@lwc/lwc": lwcPlugin,
		},
		rules: {
			"@lwc/lwc/no-api-reassignments": "error",
			"@lwc/lwc/no-attributes-during-construction": "error",
			"@lwc/lwc/no-deprecated": "error",
			"@lwc/lwc/no-disallowed-lwc-imports": "error",
			"@lwc/lwc/no-document-query": "error",
			"@lwc/lwc/no-inner-html": "error",
			"@lwc/lwc/no-leading-uppercase-api-name": "error",
			"@lwc/lwc/no-leaky-event-listeners": "error",
			"@lwc/lwc/no-template-children": "error",
			"@lwc/lwc/prefer-custom-event": "warn",
			"@lwc/lwc/valid-api": "error",
			"@lwc/lwc/valid-track": "error",
			"@lwc/lwc/valid-wire": "error",
		},
	},
	{
		files: ["**/__tests__/**/*.js"],
		...jestPlugin.configs["flat/recommended"],
	},
	eslintConfigPrettier,
	{
		ignores: [
			"node_modules/**",
			"__lwr_cache__/**",
			"coverage/**",
			"docs/**",
			"site/**",
			".claude/**",
		],
	},
];
