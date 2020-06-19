import { BorderWidth, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const borderWidth = (
    theme: Theme,
    borderWidth: NumberOrString
): BorderWidth => getProperty<BorderWidth>(theme, 'borderWidths', borderWidth);
