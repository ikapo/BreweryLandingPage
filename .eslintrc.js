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
    "settings": {
        'import/resolver': {
            alias: {
                map: [['@/', './src/']],
                extensions: ['.ts', '.js', '.tsx'],
            },
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
        "plugins": [
            "react",
            "@typescript-eslint"
        ],
        "rules": {
            // Unneeded since react 17
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "off",
            "import/prefer-default-export": "off",
        }
    }
