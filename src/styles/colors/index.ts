import { Styles } from '../index';
import { color, Theme } from '../../theme';
import { filterToProperties } from '../../utilities/filter-to-properties';

export const withColors = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'backgroundColor',
            propertyName: 'background-color',
            value: color(theme, styles.backgroundColor)
        },
        {
            styleName: 'textColor',
            propertyName: 'color',
            value: color(theme, styles.textColor)
        },
        {
            styleName: 'borderColor',
            propertyName: 'border-color',
            value: color(theme, styles.borderColor)
        },
        {
            styleName: 'borderTopColor',
            propertyName: 'border-top-color',
            value: color(theme, styles.borderTopColor)
        },
        {
            styleName: 'borderRightColor',
            propertyName: 'border-right-color',
            value: color(theme, styles.borderRightColor)
        },
        {
            styleName: 'borderBottomColor',
            propertyName: 'border-bottom-color',
            value: color(theme, styles.borderBottomColor)
        },
        {
            styleName: 'borderLeftColor',
            propertyName: 'border-left-color',
            value: color(theme, styles.borderLeftColor)
        }
    ]);
