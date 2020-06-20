import { Styles } from '../index';
import { Margin, Padding, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withLayout = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'margin',
            propertyName: 'margin',
            value: getProperty<Margin>(theme, 'sizes', styles.margin)
        },
        {
            styleName: 'marginX',
            propertyName: 'margin-left',
            value: getProperty<Margin>(theme, 'sizes', styles.marginX)
        },
        {
            styleName: 'marginX',
            propertyName: 'margin-right',
            value: getProperty<Margin>(theme, 'sizes', styles.marginX)
        },
        {
            styleName: 'marginY',
            propertyName: 'margin-top',
            value: getProperty<Margin>(theme, 'sizes', styles.marginY)
        },
        {
            styleName: 'marginY',
            propertyName: 'margin-bottom',
            value: getProperty<Margin>(theme, 'sizes', styles.marginY)
        },
        {
            styleName: 'marginTop',
            propertyName: 'margin-top',
            value: getProperty<Margin>(theme, 'sizes', styles.marginTop)
        },
        {
            styleName: 'marginLeft',
            propertyName: 'margin-left',
            value: getProperty<Margin>(theme, 'sizes', styles.marginLeft)
        },
        {
            styleName: 'marginBottom',
            propertyName: 'margin-bottom',
            value: getProperty<Margin>(theme, 'sizes', styles.marginBottom)
        },
        {
            styleName: 'marginLeft',
            propertyName: 'margin-left',
            value: getProperty<Margin>(theme, 'sizes', styles.marginLeft)
        },
        {
            styleName: 'padding',
            propertyName: 'padding',
            value: getProperty<Padding>(theme, 'sizes', styles.padding)
        },
        {
            styleName: 'paddingX',
            propertyName: 'padding-left',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingX)
        },
        {
            styleName: 'paddingX',
            propertyName: 'padding-right',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingX)
        },
        {
            styleName: 'paddingY',
            propertyName: 'padding-top',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingY)
        },
        {
            styleName: 'paddingY',
            propertyName: 'padding-bottom',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingY)
        },
        {
            styleName: 'paddingTop',
            propertyName: 'padding-top',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingTop)
        },
        {
            styleName: 'paddingLeft',
            propertyName: 'padding-left',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingLeft)
        },
        {
            styleName: 'paddingBottom',
            propertyName: 'padding-bottom',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingBottom)
        },
        {
            styleName: 'paddingLeft',
            propertyName: 'padding-left',
            value: getProperty<Padding>(theme, 'sizes', styles.paddingLeft)
        }
    ]);
