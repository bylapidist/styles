import { FontWeight, getProperty, NumberOrString, Theme } from '../index';

export const fontWeight = (
    theme: Theme,
    fontWeight: NumberOrString
): FontWeight => getProperty<FontWeight>(theme, 'fontWeights', fontWeight);
