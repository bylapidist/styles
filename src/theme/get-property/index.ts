import { AnyThemeObject, NumberOrString, Theme } from '../index';

export const getProperty = <T>(
    theme: Theme,
    property: string,
    value: NumberOrString
): T => {
    const propertyGroup: AnyThemeObject = theme[property];

    if (propertyGroup) {
        return propertyGroup[value];
    }

    throw new Error(`${value} does not exist on theme.${property}`);
};
