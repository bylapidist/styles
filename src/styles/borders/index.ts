import { Styles } from '../index';
import { BorderRadius, BorderWidth, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withBorders = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'borderRadius',
            propertyName: 'border-radius',
            value: getProperty<BorderRadius>(
                theme,
                'borderRadii',
                styles.borderRadius
            )
        },
        {
            styleName: 'borderWidth',
            propertyName: 'border-width',
            value: getProperty<BorderWidth>(
                theme,
                'borderWidths',
                styles.borderWidth
            )
        },
        {
            styleName: 'borderTopWidth',
            propertyName: 'border-top-width',
            value: getProperty<BorderWidth>(
                theme,
                'borderWidths',
                styles.borderTopWidth
            )
        },
        {
            styleName: 'borderRightWidth',
            propertyName: 'border-right-width',
            value: getProperty<BorderWidth>(
                theme,
                'borderWidths',
                styles.borderRightWidth
            )
        },
        {
            styleName: 'borderBottomWidth',
            propertyName: 'border-bottom-width',
            value: getProperty<BorderWidth>(
                theme,
                'borderWidths',
                styles.borderBottomWidth
            )
        },
        {
            styleName: 'borderLeftWidth',
            propertyName: 'border-left-width',
            value: getProperty<BorderWidth>(
                theme,
                'borderWidths',
                styles.borderLeftWidth
            )
        },
        {
            styleName: 'boxShadow',
            propertyName: 'box-shadow',
            value: getProperty<BorderWidth>(
                theme,
                'boxShadows',
                styles.boxShadow
            )
        }
    ]);
