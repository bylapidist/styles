import * as CSS from 'csstype';
import { Styles } from '../index';
import { NumberOrString, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme';

export const withBorders = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'borderRadius',
            propertyName: 'border-radius',
            value: getProperty<CSS.Property.BorderRadius<NumberOrString>>(
                theme,
                'borderRadii',
                styles.borderRadius
            )
        },
        {
            styleName: 'borderWidth',
            propertyName: 'border-width',
            value: getProperty<CSS.Property.BorderWidth<NumberOrString>>(
                theme,
                'borderWidths',
                styles.borderWidth
            )
        },
        {
            styleName: 'borderTopWidth',
            propertyName: 'border-top-width',
            value: getProperty<CSS.Property.BorderTopWidth<NumberOrString>>(
                theme,
                'borderWidths',
                styles.borderTopWidth
            )
        },
        {
            styleName: 'borderRightWidth',
            propertyName: 'border-right-width',
            value: getProperty<CSS.Property.BorderRightWidth<NumberOrString>>(
                theme,
                'borderWidths',
                styles.borderRightWidth
            )
        },
        {
            styleName: 'borderBottomWidth',
            propertyName: 'border-bottom-width',
            value: getProperty<CSS.Property.BorderBottomWidth<NumberOrString>>(
                theme,
                'borderWidths',
                styles.borderBottomWidth
            )
        },
        {
            styleName: 'borderLeftWidth',
            propertyName: 'border-left-width',
            value: getProperty<CSS.Property.BorderLeftWidth<NumberOrString>>(
                theme,
                'borderWidths',
                styles.borderLeftWidth
            )
        },
        {
            styleName: 'boxShadow',
            propertyName: 'box-shadow',
            value: getProperty<CSS.Property.BoxShadow>(
                theme,
                'boxShadows',
                styles.boxShadow
            )
        }
    ]);
