import { BorderRadius, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const borderRadius = (
    theme: Theme,
    borderRadius?: NumberOrString
): BorderRadius =>
    getProperty<BorderRadius>(theme, 'borderRadii', borderRadius);
