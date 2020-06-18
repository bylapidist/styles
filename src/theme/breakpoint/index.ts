import { Breakpoint, getProperty, NumberOrString, Theme } from '../index';

export const breakpoint = (
    theme: Theme,
    breakpoint: NumberOrString
): Breakpoint => getProperty<Breakpoint>(theme, 'breakpoints', breakpoint);
