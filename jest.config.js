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
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
	},
};
