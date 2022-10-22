/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	root: true,

	extends: [
		'eslint:recommended',

		// use the recommended rules from `@eslint-plugin-react`
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',

		// use the recommended rules from `@typescript-eslint/eslint-plugin`
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',

		'prettier',

		// enable `eslint-plugin-prettier` and `eslint-config-prettier` to handle Prettier errors as ESLint errors;
		// make sure this is the last item in the `extends` array.
		// 'plugin:prettier/recommended',
	],

	env: {
		browser: true,
		node: true,
	},

	// specify ESLintparser
	parser: '@typescript-eslint/parser',

	// @see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject
	parserOptions: {
		ecmaFeatures: {
			jsx: true, // enable JSX parsing
		},
		ecmaVersion: 'latest', // allow the latest ECMAScript features
		project: [
			'./tsconfig.json',
			'./tsconfig.eslint.json', // https://stackoverflow.com/a/68686975
		],
		sourceType: 'module', // allow ES6 imports
	},

	plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],

	rules: {
		'import/prefer-default-export': 'off',
	},

	settings: {
		react: {
			// setect the React version w/ `eslint-plugin-react`
			version: 'detect',
		},
	},
}
