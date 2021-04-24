module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  displayName: "CLIENT",
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.less$": "identity-obj-proxy",
  },

};