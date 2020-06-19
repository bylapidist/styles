import { BoxShadow, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const boxShadow = (
    theme: Theme,
    boxShadow?: NumberOrString
): BoxShadow => getProperty<BoxShadow>(theme, 'boxShadows', boxShadow);
