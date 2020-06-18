import { Styles } from './index';
import { breakpoint, Theme, ThemeObject } from '../theme';
import { withBase } from './with-base';

export const withMediaQueries = (
    breakpoints: ThemeObject<Styles>,
    theme: Theme
): string =>
    Object.entries(breakpoints)
        .map(
            ([bp, styles]) => `
            @media only screen and (min-width: ${breakpoint(theme, bp)}) {
                ${withBase(theme, styles)}
            }
        `
        )
        .join('');
