import { Styles } from './index';
import { Theme } from '../theme';
import { withUtilities } from './with-utilities';
import { withBorders } from './with-borders';
import { withLayout } from './with-layout';
import { withTypography } from './with-typography';
import { withColors } from './with-colors';

export const withBase = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${withUtilities(styles)};
        ${withTypography(theme, styles)}
        ${withBorders(theme, styles)}
        ${withLayout(theme, styles)}
        ${withColors(theme, styles)}
`
        : '';
