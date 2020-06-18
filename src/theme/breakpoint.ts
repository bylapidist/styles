import { NumberOrString, Theme } from './index';

export const breakpoint = (
    theme: Theme,
    breakpoint: NumberOrString
): string => {
    if (theme.breakpoints && theme.breakpoints[breakpoint]) {
        return theme.breakpoints[breakpoint];
    }

    throw new Error(`${breakpoint} does not exist on theme.breakpoints`);
};
