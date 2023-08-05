const StyleDictionary = require('style-dictionary');
const fs = require('fs');

/**
 * Build a CSS platform with specified source, destination, and selector.
 * @param {string} sourcePath - Source path pattern for token files.
 * @param {string} destination - Destination file name for the CSS output.
 * @param {string} [selector] - CSS selector for scoping variables.
 */
const buildCssPlatform = (sourcePath, destination, selector = '') => {
    StyleDictionary.extend({
        source: [sourcePath],
        platforms: {
            css: {
                transformGroup: 'css',
                buildPath: 'dist/',
                files: [
                    {
                        destination,
                        format: 'css/variables',
                        options: {
                            outputReferences: true,
                            selector
                        }
                    }
                ]
            }
        }
    }).buildAllPlatforms();
};

// Build the core design tokens (e.g. size, breakpoints, fractions)
buildCssPlatform('tokens/core/**/*.cjs', 'index.css');

// Build the light and dark specific tokens
buildCssPlatform('tokens/theme/light/**/*.cjs', 'light.css', '.theme-light');
buildCssPlatform('tokens/theme/dark/**/*.cjs', 'dark.css', '.theme-dark');

/**
 * Combines the contents of index, light, and dark CSS files into a single index.css file.
 * Deletes the light and dark CSS files after combining.
 */
(() => {
    const indexPath = './dist/index.css';
    const lightPath = './dist/light.css';
    const darkPath = './dist/dark.css';

    try {
        const combinedContent = [indexPath, lightPath, darkPath]
            .map((filePath) => fs.readFileSync(filePath, 'utf-8'))
            .join('\n');

        fs.writeFileSync(indexPath, combinedContent, 'utf-8');
        [lightPath, darkPath].forEach(fs.unlinkSync);
        console.log(`✔︎ CSS files combined and written to ${indexPath}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
