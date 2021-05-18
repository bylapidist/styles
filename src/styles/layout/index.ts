import * as CSS from 'csstype';
import { Styles } from '../index';
import { NumberOrString, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme';

export const withLayout = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'margin',
            propertyName: 'margin',
            value: getProperty<CSS.Property.Margin<NumberOrString>>(
                theme,
                'sizes',
                styles.margin
            )
        },
        {
            styleName: 'marginX',
            propertyName: 'margin-left',
            value: getProperty<CSS.Property.MarginLeft<NumberOrString>>(
                theme,
                'sizes',
                styles.marginX
            )
        },
        {
            styleName: 'marginX',
            propertyName: 'margin-right',
            value: getProperty<CSS.Property.MarginRight<NumberOrString>>(
                theme,
                'sizes',
                styles.marginX
            )
        },
        {
            styleName: 'marginY',
            propertyName: 'margin-top',
            value: getProperty<CSS.Property.MarginTop<NumberOrString>>(
                theme,
                'sizes',
                styles.marginY
            )
        },
        {
            styleName: 'marginY',
            propertyName: 'margin-bottom',
            value: getProperty<CSS.Property.MarginBottom<NumberOrString>>(
                theme,
                'sizes',
                styles.marginY
            )
        },
        {
            styleName: 'marginTop',
            propertyName: 'margin-top',
            value: getProperty<CSS.Property.MarginTop<NumberOrString>>(
                theme,
                'sizes',
                styles.marginTop
            )
        },
        {
            styleName: 'marginLeft',
            propertyName: 'margin-left',
            value: getProperty<CSS.Property.MarginLeft<NumberOrString>>(
                theme,
                'sizes',
                styles.marginLeft
            )
        },
        {
            styleName: 'marginBottom',
            propertyName: 'margin-bottom',
            value: getProperty<CSS.Property.MarginBottom<NumberOrString>>(
                theme,
                'sizes',
                styles.marginBottom
            )
        },
        {
            styleName: 'marginRight',
            propertyName: 'margin-right',
            value: getProperty<CSS.Property.MarginRight<NumberOrString>>(
                theme,
                'sizes',
                styles.marginRight
            )
        },
        {
            styleName: 'padding',
            propertyName: 'padding',
            value: getProperty<CSS.Property.Padding<NumberOrString>>(
                theme,
                'sizes',
                styles.padding
            )
        },
        {
            styleName: 'paddingX',
            propertyName: 'padding-left',
            value: getProperty<CSS.Property.PaddingLeft<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingX
            )
        },
        {
            styleName: 'paddingX',
            propertyName: 'padding-right',
            value: getProperty<CSS.Property.PaddingRight<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingX
            )
        },
        {
            styleName: 'paddingY',
            propertyName: 'padding-top',
            value: getProperty<CSS.Property.PaddingTop<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingY
            )
        },
        {
            styleName: 'paddingY',
            propertyName: 'padding-bottom',
            value: getProperty<CSS.Property.PaddingBottom<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingY
            )
        },
        {
            styleName: 'paddingTop',
            propertyName: 'padding-top',
            value: getProperty<CSS.Property.PaddingTop<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingTop
            )
        },
        {
            styleName: 'paddingRight',
            propertyName: 'padding-right',
            value: getProperty<CSS.Property.PaddingRight<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingRight
            )
        },
        {
            styleName: 'paddingBottom',
            propertyName: 'padding-bottom',
            value: getProperty<CSS.Property.PaddingBottom<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingBottom
            )
        },
        {
            styleName: 'paddingLeft',
            propertyName: 'padding-left',
            value: getProperty<CSS.Property.PaddingLeft<NumberOrString>>(
                theme,
                'sizes',
                styles.paddingLeft
            )
        }
    ]);
