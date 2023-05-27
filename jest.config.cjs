module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/styleMock.cjs",
      },
}