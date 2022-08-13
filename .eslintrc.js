module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "sourceType": "module",
        "project": ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "ignorePatterns": ["**/*.css",  "**/*.test.ts",
    "**/*.config.js"],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "arrow-body-style": 0,
        "import/prefer-default-export": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "linebreak-style": 0,
        "max-len": ["error", { "code": 200, "ignoreStrings": true }],
        "react/destructuring-assignment": 0,
        "react/no-array-index-key": 0,
        "react/no-unused-prop-types": 0,
        "react/jsx-props-no-spreading": 0,
        "@typescript-eslint/default-param-last": 0,
        "@typescript-eslint/dot-notation": 0,
        "@typescript-eslint/no-explicit-any": "off"
      }
}
