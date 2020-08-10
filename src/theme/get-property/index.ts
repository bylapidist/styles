import {
    AnyThemeObject,
    Color,
    ColorGroup,
    NumberOrString,
    Theme,
    ThemeObject
} from '../index';

const getColorFromColorGroup = <T>(
    colors: ThemeObject<ThemeObject<string>>,
    group: string,
    shade: string
): T => {
    return (colors[group][shade] as unknown) as T;
};

const isColorGroup = (color?: NumberOrString | Color | ColorGroup): boolean => {
    if (typeof color !== 'object') return false;
    return !!(
        Object.prototype.hasOwnProperty.call(color, 'group') &&
        Object.prototype.hasOwnProperty.call(color, 'shade')
    );
};

export const getProperty = <T>(
    theme: Theme,
    property: string,
    value?: NumberOrString | Color | ColorGroup
): T => {
    const propertyGroup: AnyThemeObject = theme[property];

    if (isColorGroup(value)) {
        return getColorFromColorGroup(
            theme.colors as ThemeObject<ThemeObject<string>>,
            (value as ColorGroup).group as string,
            (value as ColorGroup).shade as string
        );
    }

    if (value && propertyGroup && propertyGroup[value as string]) {
        if (Array.isArray(propertyGroup[value as string])) {
            return (((propertyGroup[value as string] as unknown) as Array<
                T
            >).join(', ') as unknown) as T;
        }

        return (propertyGroup[value as string] as unknown) as T;
    }

    return (value as unknown) as T;
};
