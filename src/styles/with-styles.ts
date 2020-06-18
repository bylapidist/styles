import { Styles } from './index';
import { Theme } from '../theme';
import { withNesting } from './with-nesting';
import { withBase } from './with-base';
import { withBreakpoints } from './with-breakpoints';

export const withStyles = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withBase(theme, styles)}
        ${withBreakpoints(theme, styles)}
        ${withNesting(theme, styles)}
`
        : '';
