module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,ts}',
        '!**/node_modules/**',
        '!src/themes/**',
        '!src/variants.ts',
        '!src/types.ts',
        '!src/index.ts'
    ]
};
