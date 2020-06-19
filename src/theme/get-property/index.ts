import { AnyThemeObject, NumberOrString, Theme } from '../index';

export const getProperty = <T>(
    theme: Theme,
    property: string,
    value: NumberOrString
): T => {
    const propertyGroup: AnyThemeObject = theme[property];

    if (propertyGroup && propertyGroup[value]) {
        return (propertyGroup[value] as unknown) as T;
    }

    throw new Error(`${value} does not exist on theme.${property}`);
};
