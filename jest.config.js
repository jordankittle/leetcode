module.exports = {
    preset: 'ts-jest',  // Tells Jest to use ts-jest for TypeScript
    testEnvironment: 'node',  // Sets the test environment to Node.js
    moduleFileExtensions: ['ts', 'js'],  // Recognizes .ts and .js files
    testMatch: ['**/?(*.)+(spec|test).ts'],  // Matches .test.ts or .spec.ts files
  };