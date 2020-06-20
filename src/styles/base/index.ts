import { Theme } from '../../theme';
import { Styles } from '../index';
import { withUtilities } from '../utilities';
import { withBorders } from '../borders';
import { withLayout } from '../layout';
import { withTypography } from '../typography';
import { withColors } from '../colors';
import { withDimensions } from '../dimensions';

export const withBase = (theme: Theme, styles: Styles): string =>
    [
        withUtilities(styles),
        withTypography(theme, styles),
        withBorders(theme, styles),
        withDimensions(theme, styles),
        withLayout(theme, styles),
        withColors(theme, styles)
    ]
        .join(' ')
        .trim();
