const StyleDictionary = require('style-dictionary');

StyleDictionary.extend({
    source: ['tokens/**/*.cjs'],

    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'dist/',
            files: [
                {
                    destination: 'index.css',
                    format: 'css/variables',
                    options: {
                        outputReferences: true
                    }
                }
            ]
        },
        js: {
            transformGroup: 'js',
            buildPath: 'dist/',
            files: [
                {
                    destination: 'index.js',
                    format: 'javascript/es6'
                },
                {
                    destination: 'index.json',
                    format: 'json/flat'
                }
            ]
        }
    }
}).buildAllPlatforms();
