module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "@react-native-community/eslint-config"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script",
                "ecmafeatures": {
                    "jsx": true
                }
            }
        }
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "presets": "@babel/preset-react",
        "requireConfigFile": false,
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@babel/plugin-syntax-jsx",
    ],
    "rules": {
        semi: ["error", "never"],
        'comma-dangle': [2, 'never'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: false },
        ]
    }
}
