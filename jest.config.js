export default {
	preset: "@lwc/jest-preset",
	moduleNameMapper: {
		"^(base|ui)/(.+)": "<rootDir>/src/modules/$1/$2/$2",
	},
	collectCoverage: true,
	collectCoverageFrom: [
		"src/modules/**/**/*.{js,ts}",
		"!**/node_modules/**",
		"!**/vendor/**",
	],
};
