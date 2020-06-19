import { Styles } from '../index';
import { Theme } from '../../theme';
import { withMediaQueries } from '../media-queries';

export const withBreakpoints = (theme: Theme, styles?: Styles): string =>
    styles && styles.breakpoints
        ? `
        ${withMediaQueries(styles.breakpoints, theme)}
    `
        : '';
