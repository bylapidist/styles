import { Theme, ThemeObject } from './index';
import { breakpoint } from './breakpoint';
import { allBreakpoints } from './all-breakpoints';

export const allMediaQueries = (theme: Theme): ThemeObject<string> => {
    if (theme.breakpoints) {
        const allBps = allBreakpoints(theme);
        const allMediaQueries: ThemeObject<string> = {};

        allBps.forEach((bp) => {
            allMediaQueries[bp] = `(min-width: ${breakpoint(theme, bp)})`;
        });

        return allMediaQueries;
    }

    throw new Error(`theme.breakpoints does not exist`);
};
