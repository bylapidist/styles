import { NumberOrString, Theme, Width } from '../index';
import { getProperty } from '../get-property';

export const width = (theme: Theme, width: NumberOrString): Width =>
    getProperty<Width>(theme, 'widths', width);
