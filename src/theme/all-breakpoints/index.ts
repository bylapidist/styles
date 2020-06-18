import { Theme } from '../index';

export const allBreakpoints = (theme: Theme): string[] => {
    if (theme.breakpoints) {
        return Object.keys(theme.breakpoints);
    }

    throw new Error(`theme.breakpoints does not exist`);
};
