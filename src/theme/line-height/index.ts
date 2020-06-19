import { getProperty, LineHeight, NumberOrString, Theme } from '../index';

export const lineHeight = (
    theme: Theme,
    lineHeight: NumberOrString
): LineHeight => getProperty<LineHeight>(theme, 'lineHeights', lineHeight);
