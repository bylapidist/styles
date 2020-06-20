import { Styles } from '../index';
import { Color, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withColors = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'backgroundColor',
            propertyName: 'background-color',
            value: getProperty<Color>(
                theme,
                'backgroundColor',
                styles.backgroundColor
            )
        },
        {
            styleName: 'textColor',
            propertyName: 'color',
            value: getProperty<Color>(theme, 'textColor', styles.textColor)
        },
        {
            styleName: 'borderColor',
            propertyName: 'border-color',
            value: getProperty<Color>(theme, 'borderColor', styles.borderColor)
        },
        {
            styleName: 'borderTopColor',
            propertyName: 'border-top-color',
            value: getProperty<Color>(
                theme,
                'borderTopColor',
                styles.borderTopColor
            )
        },
        {
            styleName: 'borderRightColor',
            propertyName: 'border-right-color',
            value: getProperty<Color>(
                theme,
                'borderRightColor',
                styles.borderRightColor
            )
        },
        {
            styleName: 'borderBottomColor',
            propertyName: 'border-bottom-color',
            value: getProperty<Color>(
                theme,
                'borderBottomColor',
                styles.borderBottomColor
            )
        },
        {
            styleName: 'borderLeftColor',
            propertyName: 'border-left-color',
            value: getProperty<Color>(
                theme,
                'borderLeftColor',
                styles.borderLeftColor
            )
        }
    ]);
