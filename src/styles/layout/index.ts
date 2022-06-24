import * as CSS from 'csstype';
import { Styles } from '../index';
import { NumberOrString, Theme } from '../../theme';
import { filterToProperties } from '../../theme/filter-to-properties';
import { getProperty } from '../../theme';

export const withLayout = (theme: Theme, styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'flex',
            propertyName: 'flex',
            value: styles.flex
        },
        {
            styleName: 'flexWrap',
            propertyName: 'flex-wrap',
            value: styles.flexWrap
        },
        {
            styleName: 'flexDirection',
            propertyName: 'flex-direction',
            value: styles.flexDirection
        },
        {
            styleName: 'flexGrow',
            propertyName: 'flex-grow',
            value: styles.flexGrow
        },
        {
            styleName: 'flexShrink',
            propertyName: 'flex-shrink',
            value: styles.flexShrink
        },
        {
            styleName: 'flexFlow',
            propertyName: 'flex-flow',
            value: styles.flexFlow
        },
        {
            styleName: 'flexBasis',
            propertyName: 'flex-basis',
            value: styles.flexBasis
        },
        {
            styleName: 'justifyContent',
            propertyName: 'justify-content',
            value: styles.justifyContent
        },
        {
            styleName: 'alignSelf',
            propertyName: 'align-self',
            value: styles.alignSelf
        },
        {
            styleName: 'alignItems',
            propertyName: 'align-items',
            value: styles.alignItems
        },
        {
            styleName: 'alignContent',
            propertyName: 'align-content',
            value: styles.alignContent
        },
        {
            styleName: 'gap',
            propertyName: 'gap',
            value: styles.gap
        },
        {
            styleName: 'sizeGap',
            propertyName: 'gap',
            value: getProperty<string>(theme, 'sizes', styles.sizeGap)
        },
        {
            styleName: 'rowGap',
            propertyName: 'rowGap',
            value: styles.rowGap
        },
        {
            styleName: 'sizeRowGap',
            propertyName: 'row-gap',
            value: getProperty<string>(theme, 'sizes', styles.sizeRowGap)
        },
        {
            styleName: 'columnGap',
            propertyName: 'column-gap',
            value: styles.columnGap
        },
        {
            styleName: 'sizeColumnGap',
            propertyName: 'column-gap',
            value: getProperty<string>(theme, 'sizes', styles.sizeColumnGap)
        },
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
        },
        {
            styleName: 'order',
            propertyName: 'order',
            value: styles.order
        }
    ]);
