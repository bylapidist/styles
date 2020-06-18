import { BorderWidth, getProperty, NumberOrString, Theme } from '../index';

export const borderWidth = (
    theme: Theme,
    borderWidth: NumberOrString
): BorderWidth => getProperty<BorderWidth>(theme, 'borderWidths', borderWidth);
