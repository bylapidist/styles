import * as CSS from 'csstype';
import { Styles } from '../index';
import { NumberOrString, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withTypography = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'fontSize',
            propertyName: 'font-size',
            value: getProperty<CSS.Property.FontSize>(
                theme,
                'fontSizes',
                styles.fontSize
            )
        },
        {
            styleName: 'fontWeight',
            propertyName: 'font-weight',
            value: getProperty<CSS.Property.FontWeight>(
                theme,
                'fontWeights',
                styles.fontWeight
            )
        },
        {
            styleName: 'fontFamily',
            propertyName: 'font-family',
            value: getProperty<CSS.Property.FontFamily>(
                theme,
                'fontFamilies',
                styles.fontFamily
            )
        },
        {
            styleName: 'lineHeight',
            propertyName: 'line-height',
            value: getProperty<CSS.Property.LineHeight<NumberOrString>>(
                theme,
                'lineHeights',
                styles.lineHeight
            )
        },
        {
            styleName: 'letterSpacing',
            propertyName: 'letter-spacing',
            value: getProperty<CSS.Property.LetterSpacing<NumberOrString>>(
                theme,
                'letterSpacings',
                styles.letterSpacing
            )
        }
    ]);
