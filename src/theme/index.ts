/**
 * @module
 * Theme
 */

import * as CSS from 'csstype';

export * from './get-property';
export * from './merge-themes';

export type ThemeObject<T> = { [K: string]: T };

export type ThemeArray<T> = { [K: string]: T[] };

export type NumberOrString = string | number | 0 | undefined;

export type ColorGroup = { group: NumberOrString; shade: NumberOrString };

export type ColorOrColorGroup = CSS.Property.Color | ColorGroup;

export type ThemeObjects =
    | ColorOrColorGroup
    | NumberOrString
    | ThemeObject<CSS.Property.Color>;

export type AnyThemeObject =
    | ThemeObject<ThemeObjects>
    | ThemeArray<ThemeObjects>
    | undefined;

export interface Theme {
    readonly breakpoints?: ThemeObject<string>;
    readonly fontSizes?: ThemeObject<CSS.Property.FontSize>;
    readonly fontFamilies?: ThemeArray<CSS.Property.FontFamily>;
    readonly fontWeights?: ThemeObject<
        CSS.Property.FontWeight | NumberOrString
    >;
    readonly lineHeights?: ThemeObject<
        CSS.Property.LineHeight<NumberOrString> | NumberOrString
    >;
    readonly letterSpacings?: ThemeObject<
        CSS.Property.LetterSpacing<NumberOrString> | NumberOrString
    >;
    readonly sizes?: ThemeObject<string>;
    readonly borderRadii?: ThemeObject<
        CSS.Property.BorderRadius<NumberOrString>
    >;
    readonly borderWidths?: ThemeObject<
        | CSS.Property.BorderWidth<NumberOrString>
        | CSS.Property.BorderTopWidth<NumberOrString>
        | CSS.Property.BorderRightWidth<NumberOrString>
        | CSS.Property.BorderBottomWidth<NumberOrString>
        | CSS.Property.BorderLeftWidth<NumberOrString>
    >;
    readonly boxShadows?: ThemeObject<CSS.Property.BoxShadow>;
    readonly widths?: ThemeObject<CSS.Property.Width<NumberOrString>>;
    readonly colors?: ThemeObject<ThemeObject<CSS.Property.Color>>;
    [K: string]: AnyThemeObject;
}
