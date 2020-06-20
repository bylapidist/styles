import { Styles } from '../index';
import { Breakpoint, Size, Theme, WidthOrHeight } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme/get-property';

export const withDimensions = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'width',
            propertyName: 'width',
            value: getProperty<WidthOrHeight>(theme, 'widths', styles.width)
        },
        {
            styleName: 'containerWidth',
            propertyName: 'width',
            value: getProperty<Breakpoint>(
                theme,
                'breakpoints',
                styles.containerWidth
            )
        },
        {
            styleName: 'sizeWidth',
            propertyName: 'width',
            value: getProperty<Size>(theme, 'sizes', styles.sizeWidth)
        },
        {
            styleName: 'minWidth',
            propertyName: 'min-width',
            value: getProperty<WidthOrHeight>(theme, 'widths', styles.minWidth)
        },
        {
            styleName: 'containerMinWidth',
            propertyName: 'min-width',
            value: getProperty<Breakpoint>(
                theme,
                'breakpoints',
                styles.containerMinWidth
            )
        },
        {
            styleName: 'sizeMinWidth',
            propertyName: 'min-width',
            value: getProperty<Size>(theme, 'sizes', styles.sizeMinWidth)
        },
        {
            styleName: 'maxWidth',
            propertyName: 'max-width',
            value: getProperty<WidthOrHeight>(theme, 'widths', styles.maxWidth)
        },
        {
            styleName: 'containerMaxWidth',
            propertyName: 'max-width',
            value: getProperty<Breakpoint>(
                theme,
                'breakpoints',
                styles.containerMaxWidth
            )
        },
        {
            styleName: 'sizeMaxWidth',
            propertyName: 'max-width',
            value: getProperty<Size>(theme, 'sizes', styles.sizeMaxWidth)
        },
        {
            styleName: 'height',
            propertyName: 'height',
            value: getProperty<WidthOrHeight>(theme, 'widths', styles.height)
        },
        {
            styleName: 'containerHeight',
            propertyName: 'height',
            value: getProperty<Breakpoint>(
                theme,
                'breakpoints',
                styles.containerHeight
            )
        },
        {
            styleName: 'sizeHeight',
            propertyName: 'height',
            value: getProperty<Size>(theme, 'sizes', styles.sizeHeight)
        },
        {
            styleName: 'minHeight',
            propertyName: 'min-height',
            value: getProperty<WidthOrHeight>(theme, 'widths', styles.minHeight)
        },
        {
            styleName: 'containerMinHeight',
            propertyName: 'min-height',
            value: getProperty<Breakpoint>(
                theme,
                'breakpoints',
                styles.containerMinHeight
            )
        },
        {
            styleName: 'sizeMinHeight',
            propertyName: 'min-height',
            value: getProperty<Size>(theme, 'sizes', styles.sizeMinHeight)
        },
        {
            styleName: 'maxHeight',
            propertyName: 'max-height',
            value: getProperty<WidthOrHeight>(theme, 'widths', styles.maxHeight)
        },
        {
            styleName: 'containerMaxHeight',
            propertyName: 'max-height',
            value: getProperty<Breakpoint>(
                theme,
                'breakpoints',
                styles.containerMaxHeight
            )
        },
        {
            styleName: 'sizeMaxHeight',
            propertyName: 'max-height',
            value: getProperty<Size>(theme, 'sizes', styles.sizeMaxHeight)
        }
    ]);
