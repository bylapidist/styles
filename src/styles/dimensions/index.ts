import * as CSS from 'csstype';
import { Styles } from '../index';
import { NumberOrString, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme';

export const withDimensions = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'width',
            propertyName: 'width',
            value: getProperty<CSS.Property.Width<NumberOrString>>(
                theme,
                'widths',
                styles.width
            )
        },
        {
            styleName: 'containerWidth',
            propertyName: 'width',
            value: getProperty<string>(
                theme,
                'breakpoints',
                styles.containerWidth
            )
        },
        {
            styleName: 'sizeWidth',
            propertyName: 'width',
            value: getProperty<string>(theme, 'sizes', styles.sizeWidth)
        },
        {
            styleName: 'minWidth',
            propertyName: 'min-width',
            value: getProperty<CSS.Property.MinWidth<NumberOrString>>(
                theme,
                'widths',
                styles.minWidth
            )
        },
        {
            styleName: 'containerMinWidth',
            propertyName: 'min-width',
            value: getProperty<string>(
                theme,
                'breakpoints',
                styles.containerMinWidth
            )
        },
        {
            styleName: 'sizeMinWidth',
            propertyName: 'min-width',
            value: getProperty<string>(theme, 'sizes', styles.sizeMinWidth)
        },
        {
            styleName: 'maxWidth',
            propertyName: 'max-width',
            value: getProperty<CSS.Property.MaxWidth<NumberOrString>>(
                theme,
                'widths',
                styles.maxWidth
            )
        },
        {
            styleName: 'containerMaxWidth',
            propertyName: 'max-width',
            value: getProperty<string>(
                theme,
                'breakpoints',
                styles.containerMaxWidth
            )
        },
        {
            styleName: 'sizeMaxWidth',
            propertyName: 'max-width',
            value: getProperty<string>(theme, 'sizes', styles.sizeMaxWidth)
        },
        {
            styleName: 'height',
            propertyName: 'height',
            value: getProperty<CSS.Property.Height<NumberOrString>>(
                theme,
                'widths',
                styles.height
            )
        },
        {
            styleName: 'containerHeight',
            propertyName: 'height',
            value: getProperty<string>(
                theme,
                'breakpoints',
                styles.containerHeight
            )
        },
        {
            styleName: 'sizeHeight',
            propertyName: 'height',
            value: getProperty<string>(theme, 'sizes', styles.sizeHeight)
        },
        {
            styleName: 'minHeight',
            propertyName: 'min-height',
            value: getProperty<CSS.Property.MinHeight<NumberOrString>>(
                theme,
                'widths',
                styles.minHeight
            )
        },
        {
            styleName: 'containerMinHeight',
            propertyName: 'min-height',
            value: getProperty<string>(
                theme,
                'breakpoints',
                styles.containerMinHeight
            )
        },
        {
            styleName: 'sizeMinHeight',
            propertyName: 'min-height',
            value: getProperty<string>(theme, 'sizes', styles.sizeMinHeight)
        },
        {
            styleName: 'maxHeight',
            propertyName: 'max-height',
            value: getProperty<CSS.Property.MaxHeight<NumberOrString>>(
                theme,
                'widths',
                styles.maxHeight
            )
        },
        {
            styleName: 'containerMaxHeight',
            propertyName: 'max-height',
            value: getProperty<string>(
                theme,
                'breakpoints',
                styles.containerMaxHeight
            )
        },
        {
            styleName: 'sizeMaxHeight',
            propertyName: 'max-height',
            value: getProperty<string>(theme, 'sizes', styles.sizeMaxHeight)
        }
    ]);
