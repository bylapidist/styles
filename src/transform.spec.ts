import { Theme, ThemeCategory } from './types';
import {
    formatTheme,
    transformCategoryToCssVars,
    transformThemeToCssVars
} from './transform';

describe('formatCssVars', () => {
    const category: ThemeCategory<string, string> = {
        variants: ['variant1', 'variant2'],
        values: ['value1', 'value2']
    };

    test.each(['key1', 'key2'])('it works with keys', (key) => {
        const vars = transformCategoryToCssVars(key, category);
        expect(formatTheme('themeName', vars)).toBe(`.theme--themeName {
    --${key}__variant1: value1;
    --${key}__variant2: value2;
}`);
    });

    test('it returns empty string if vars is empty array', () => {
        expect(formatTheme('themeName', [])).toBe('');
    });
});

describe('transformCategoryToCssVars', () => {
    const category: ThemeCategory<string, string> = {
        variants: ['variant1', 'variant2'],
        values: ['value1', 'value2']
    };
    const vars = transformCategoryToCssVars('test', category);

    test('it transforms categories to css vars', () => {
        expect(vars[0]).toBe('--test__variant1: value1;');
        expect(vars[1]).toBe('--test__variant2: value2;');
    });

    test('if value is missing it works', () => {
        const brokenVars = transformCategoryToCssVars('test', {
            variants: ['variant1', 'variant2'],
            values: ['value1']
        });
        expect(brokenVars[0]).toBe('--test__variant1: value1;');
        expect(brokenVars.length).toBe(1);
    });
});

describe('transformThemeToCssVars', () => {
    test('it transforms themes to css vars', () => {
        const category: ThemeCategory<string, string> = {
            variants: ['variant1', 'variant2'],
            values: ['value1', 'value2']
        };
        expect(
            transformThemeToCssVars('themeName', {
                test: category
            } as unknown as Theme)
        ).toBe(`.theme--themeName {
    --test__variant1: value1;
    --test__variant2: value2;
}`);
    });
});
