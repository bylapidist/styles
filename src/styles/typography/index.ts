import { Styles } from '../index';
import {
    FontFamily,
    FontSize,
    LetterSpacing,
    LineHeight,
    Theme,
    FontWeight
} from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withTypography = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'fontSize',
            propertyName: 'font-size',
            value: getProperty<FontSize>(theme, 'fontSizes', styles.fontSize)
        },
        {
            styleName: 'fontWeight',
            propertyName: 'font-weight',
            value: getProperty<FontWeight>(
                theme,
                'fontWeights',
                styles.fontWeight
            )
        },
        {
            styleName: 'fontFamily',
            propertyName: 'font-family',
            value: getProperty<FontFamily>(
                theme,
                'fontFamilies',
                styles.fontFamily
            )
        },
        {
            styleName: 'lineHeight',
            propertyName: 'line-height',
            value: getProperty<LineHeight>(
                theme,
                'lineHeights',
                styles.lineHeight
            )
        },
        {
            styleName: 'letterSpacing',
            propertyName: 'letter-spacing',
            value: getProperty<LetterSpacing>(
                theme,
                'letterSpacings',
                styles.letterSpacing
            )
        }
    ]);
