import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  cacheDirectory: ".jest/cache",
  setupFilesAfterEnv: ["<rootDir>/src/main/config/jest-setup.ts"],
  moduleDirectories: ["./node_modules", "src"],
  moduleFileExtensions: ["js", "ts", "jsx", "tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(scss)$": "<rootDir>/src/main/config/CSSStub.ts",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
