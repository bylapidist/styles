import { Styles } from '../index';
import {
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    Theme
} from '../../theme';
import { filterToProperties } from '../../utilities/filter-to-properties';

export const withTypography = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'textAlign',
            propertyName: 'text-align',
            value: styles.textAlign
        },
        {
            styleName: 'fontSize',
            propertyName: 'font-size',
            value: fontSize(theme, styles.fontSize)
        },
        {
            styleName: 'fontWeight',
            propertyName: 'font-weight',
            value: fontWeight(theme, styles.fontWeight)
        },
        {
            styleName: 'fontFamily',
            propertyName: 'font-family',
            value: fontFamily(theme, styles.fontFamily)
        },
        {
            styleName: 'lineHeight',
            propertyName: 'line-height',
            value: lineHeight(theme, styles.lineHeight)
        },
        {
            styleName: 'letterSpacing',
            propertyName: 'letter-spacing',
            value: letterSpacing(theme, styles.letterSpacing)
        }
    ]);
