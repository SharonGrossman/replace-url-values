module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: '../',
    testMatch: ['<rootDir>/tests/specs/**'],
    globals: {
        'ts-jest': {
            tsconfig: {
                strictPropertyInitialization: false,
                noUnusedLocals: false,
            },
        },
    },
    reporters: ['default'],
};
