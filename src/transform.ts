import { NumberOrString, Theme, ThemeCategory } from './types';

export const formatTheme = (name: string, vars: string[]): string => {
    if (!vars.length) return '';
    return `.theme--${name} {\n    ${vars.join('\n    ')}\n}`;
};

export const transformCategoryToCssVars = (
    key: string,
    category: ThemeCategory<unknown, NumberOrString>
): string[] => {
    const vars: string[] = [];

    category.variants.forEach((variant, i) => {
        const value = category.values[i];
        if (value) {
            vars.push(`--${key}__${variant}: ${value};`);
        }
    });

    return vars;
};

export const transformThemeToCssVars = (name: string, theme: Theme) => {
    let vars: string[] = [];

    Object.keys(theme).forEach(
        (category) =>
            (vars = [
                ...vars,
                ...transformCategoryToCssVars(category, theme[category])
            ])
    );

    return formatTheme(name, vars);
};
