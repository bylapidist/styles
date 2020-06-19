import { getProperty, NumberOrString, Theme, Width } from '../index';

export const width = (theme: Theme, width: NumberOrString): Width =>
    getProperty<Width>(theme, 'widths', width);
