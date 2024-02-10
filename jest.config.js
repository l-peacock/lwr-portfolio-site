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
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
};
