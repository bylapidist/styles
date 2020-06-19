import { Styles } from '../index';
import { Theme } from '../../theme';
import { withNesting } from '../nesting';
import { withBase } from '../base';
import { withBreakpoints } from '../breakpoints';

export const withStyles = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withBase(theme, styles)}
        ${withBreakpoints(theme, styles)}
        ${withNesting(theme, styles)}
`
        : '';
