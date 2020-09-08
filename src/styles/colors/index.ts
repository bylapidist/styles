import * as CSS from 'csstype';
import { Styles } from '../index';
import { Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withColors = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'backgroundColor',
            propertyName: 'background-color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'backgroundColor',
                styles.backgroundColor
            )
        },
        {
            styleName: 'textColor',
            propertyName: 'color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'textColor',
                styles.textColor
            )
        },
        {
            styleName: 'borderColor',
            propertyName: 'border-color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'borderColor',
                styles.borderColor
            )
        },
        {
            styleName: 'borderTopColor',
            propertyName: 'border-top-color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'borderTopColor',
                styles.borderTopColor
            )
        },
        {
            styleName: 'borderRightColor',
            propertyName: 'border-right-color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'borderRightColor',
                styles.borderRightColor
            )
        },
        {
            styleName: 'borderBottomColor',
            propertyName: 'border-bottom-color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'borderBottomColor',
                styles.borderBottomColor
            )
        },
        {
            styleName: 'borderLeftColor',
            propertyName: 'border-left-color',
            value: getProperty<CSS.Property.Color>(
                theme,
                'borderLeftColor',
                styles.borderLeftColor
            )
        }
    ]);
