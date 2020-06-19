import { Breakpoint, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const breakpoint = (
    theme: Theme,
    breakpoint: NumberOrString
): Breakpoint => getProperty<Breakpoint>(theme, 'breakpoints', breakpoint);
