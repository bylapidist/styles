import { FontFamily, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const fontFamily = (
    theme: Theme,
    fontFamily: NumberOrString
): FontFamily =>
    getProperty<Array<FontFamily>>(theme, 'fontFamilies', fontFamily).join(
        ', '
    );
