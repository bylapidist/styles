import { FontFamily, NumberOrString, Theme } from '../index';

export const fontFamily = (
    theme: Theme,
    fontFamily: NumberOrString
): FontFamily => {
    if (theme.fontFamilies && theme.fontFamilies[fontFamily]) {
        return theme.fontFamilies[fontFamily].join(', ');
    }

    throw new Error(`${fontFamily} does not exist on theme.fontFamilies`);
};
