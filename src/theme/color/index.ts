import { Color, ColorGroup, Theme, ThemeObject } from '../index';

const getColorFromGroup = (
    colors: ThemeObject<ThemeObject<string>>,
    group: string,
    shade: string
): Color => {
    return (colors[group][shade] as unknown) as Color;
};

const shouldReturnNothing = (theme: Theme, color?: ColorGroup): boolean =>
    !theme || !theme.colors || !color || !color.group || !color.shade;

const invalidColorGroup = (
    colors: ThemeObject<ThemeObject<string>>,
    color: ColorGroup
): boolean =>
    !colors[color.group || ''] || !colors[color.group || ''][color.shade || ''];

export const color = (theme: Theme, color?: ColorGroup | string): Color => {
    if (typeof color === 'string') return color;

    if (shouldReturnNothing(theme, color as ColorGroup)) return '';

    if (
        invalidColorGroup(
            theme.colors as ThemeObject<ThemeObject<string>>,
            color as ColorGroup
        )
    ) {
        throw new Error(
            `${(color as ColorGroup).group} or ${
                (color as ColorGroup).shade
            } does not exist on theme.colors`
        );
    }

    return getColorFromGroup(
        theme.colors as ThemeObject<ThemeObject<string>>,
        (color as ColorGroup).group as string,
        (color as ColorGroup).shade as string
    );
};
