module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb-typescript",
        "prettier"
    ],
    "plugins": [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                "project": "./tsconfig.json",
            }
        }
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": './tsconfig.json',
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": ["node_modules/", "dist/"],
    "rules": {
        // Unneeded since react 17
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
    }
}
