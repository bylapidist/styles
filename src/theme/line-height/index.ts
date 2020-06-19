import { LineHeight, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const lineHeight = (
    theme: Theme,
    lineHeight: NumberOrString
): LineHeight => getProperty<LineHeight>(theme, 'lineHeights', lineHeight);
