import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const fontFamily = (
    theme: Theme,
    fontFamily: NumberOrString
): CSS.FontFamilyProperty => {
    if (theme.fontFamilies && theme.fontFamilies[fontFamily]) {
        return theme.fontFamilies[fontFamily].join(', ');
    }

    throw new Error(`${fontFamily} does not exist on theme.fontFamilies`);
};
