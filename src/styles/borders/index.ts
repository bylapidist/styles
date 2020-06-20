import { Styles } from '../index';
import { borderRadius, borderWidth, boxShadow, Theme } from '../../theme';
import { filterToProperties } from '../../utilities/filter-to-properties';

export const withBorders = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'borderStyle',
            propertyName: 'border-style',
            value: styles.borderStyle
        },
        {
            styleName: 'borderTopStyle',
            propertyName: 'border-top-style',
            value: styles.borderTopStyle
        },
        {
            styleName: 'borderRightStyle',
            propertyName: 'border-right-style',
            value: styles.borderRightStyle
        },
        {
            styleName: 'borderBottomStyle',
            propertyName: 'border-bottom-style',
            value: styles.borderBottomStyle
        },
        {
            styleName: 'borderLeftStyle',
            propertyName: 'border-left-style',
            value: styles.borderLeftStyle
        },
        {
            styleName: 'borderRadius',
            propertyName: 'border-radius',
            value: borderRadius(theme, styles.borderRadius)
        },
        {
            styleName: 'borderWidth',
            propertyName: 'border-width',
            value: borderWidth(theme, styles.borderWidth)
        },
        {
            styleName: 'borderTopWidth',
            propertyName: 'border-top-width',
            value: borderWidth(theme, styles.borderTopWidth)
        },
        {
            styleName: 'borderRightWidth',
            propertyName: 'border-right-width',
            value: borderWidth(theme, styles.borderRightWidth)
        },
        {
            styleName: 'borderBottomWidth',
            propertyName: 'border-bottom-width',
            value: borderWidth(theme, styles.borderBottomWidth)
        },
        {
            styleName: 'borderLeftWidth',
            propertyName: 'border-left-width',
            value: borderWidth(theme, styles.borderLeftWidth)
        },
        {
            styleName: 'boxShadow',
            propertyName: 'box-shadow',
            value: boxShadow(theme, styles.boxShadow)
        }
    ]);
