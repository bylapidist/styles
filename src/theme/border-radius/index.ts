import { BorderRadius, getProperty, NumberOrString, Theme } from '../index';

export const borderRadius = (
    theme: Theme,
    borderRadius: NumberOrString
): BorderRadius =>
    getProperty<BorderRadius>(theme, 'borderRadii', borderRadius);
