import { FontFamily, getProperty, NumberOrString, Theme } from '../index';

export const fontFamily = (
    theme: Theme,
    fontFamily: NumberOrString
): FontFamily =>
    getProperty<Array<FontFamily>>(theme, 'fontFamilies', fontFamily).join(
        ', '
    );
