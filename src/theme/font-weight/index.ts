import { FontWeight, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const fontWeight = (
    theme: Theme,
    fontWeight: NumberOrString
): FontWeight => getProperty<FontWeight>(theme, 'fontWeights', fontWeight);
