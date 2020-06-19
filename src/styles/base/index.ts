import { Theme } from '../../theme';
import { Styles } from '../index';
import { withUtilities } from '../utilities';
import { withBorders } from '../borders';
import { withLayout } from '../layout';
import { withTypography } from '../typography';
import { withColors } from '../colors';

export const withBase = (theme: Theme, styles?: Styles): string => {
    if (!styles) return '';

    return `
        ${withUtilities(styles)};
        ${withTypography(theme, styles)}
        ${withBorders(theme, styles)}
        ${withLayout(theme, styles)}
        ${withColors(theme, styles)}
    `;
};
