/** @type {import("@types/prettier").Options} */
module.exports = {
	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'ignore',

	// https://github.com/trivago/prettier-plugin-sort-imports
	importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,

	jsxSingleQuote: false,
	plugins: [require('@trivago/prettier-plugin-sort-imports')],
	printWidth: 100,
	quoteProps: 'consistent',
	semi: false,
	singleQuote: true,
	trailingComma: 'all',
}
