import { keys } from 'object';
import { NumberOrString, Theme, ThemeCategory } from './types';

export const formatTheme = (name: string, vars: string[]): string =>
    !vars.length
        ? ''
        : `.theme--${name} {
    ${vars.join('\n    ')}
  }`;

export const transformCategoryToCssVars = (
    key: string,
    { variants, values }: ThemeCategory<unknown, NumberOrString>
): string[] => {
    return variants.map((variant, i) => {
        const value = values[i];
        return value ? `--${key}__${variant}: ${value};` : '';
    });
};

export const transformThemeToCssVars = (name: string, theme: Theme) => {
    let vars: string[] = [];

    keys(theme).forEach(
        (category) =>
            (vars = [
                ...vars,
                ...transformCategoryToCssVars(category, theme[category])
            ])
    );

    return formatTheme(name, vars);
};
