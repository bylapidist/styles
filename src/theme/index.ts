import * as CSS from 'csstype';

export * from './get-property';
export * from './merge-themes';

export type ThemeObject<T> = { [K: string]: T };

export type ThemeArray<T> = { [K: string]: T[] };

export type NumberOrString = string | number | 0 | undefined;

export type BorderRadius = CSS.Property.BorderRadius<NumberOrString>;

export type BorderWidth =
    | CSS.Property.BorderWidth<NumberOrString>
    | CSS.Property.BorderTopWidth<NumberOrString>
    | CSS.Property.BorderRightWidth<NumberOrString>
    | CSS.Property.BorderBottomWidth<NumberOrString>
    | CSS.Property.BorderLeftWidth<NumberOrString>;

export type BorderStyle =
    | CSS.Property.BorderBlockStyle
    | CSS.Property.BorderTopStyle
    | CSS.Property.BorderRightStyle
    | CSS.Property.BorderBottomStyle
    | CSS.Property.BorderLeftStyle;

export type BoxShadow = CSS.Property.BoxShadow;

export type Breakpoint = string;

export type ColorGroup = { group: NumberOrString; shade: NumberOrString };

export type Color = CSS.Property.Color;

export type ColorOrColorGroup = Color | ColorGroup;

export type FontFamily = CSS.Property.FontFamily;

export type FontSize = CSS.Property.FontSize<NumberOrString>;

export type FontWeight = CSS.Property.FontWeight | NumberOrString;

export type LetterSpacing = CSS.Property.LetterSpacing<NumberOrString>;

export type LineHeight = CSS.Property.LineHeight<NumberOrString>;

export type Size = string;

export type TextAlign = CSS.Property.TextAlign;

export type Cursor = CSS.Property.Cursor;

export type Opacity = CSS.Property.Opacity;

export type Overflow =
    | CSS.Property.Overflow
    | CSS.Property.OverflowX
    | CSS.Property.OverflowY;

export type Margin =
    | CSS.Property.Margin<NumberOrString>
    | CSS.Property.MarginTop<NumberOrString>
    | CSS.Property.MarginRight<NumberOrString>
    | CSS.Property.MarginBottom<NumberOrString>
    | CSS.Property.MarginLeft<NumberOrString>;

export type Padding =
    | CSS.Property.Padding<NumberOrString>
    | CSS.Property.PaddingTop<NumberOrString>
    | CSS.Property.PaddingRight<NumberOrString>
    | CSS.Property.PaddingBottom<NumberOrString>
    | CSS.Property.PaddingLeft<NumberOrString>;

export type WidthOrHeight =
    | CSS.Property.Width<NumberOrString>
    | CSS.Property.Height<NumberOrString>;

export type ThemeObjects =
    | ColorOrColorGroup
    | NumberOrString
    | Breakpoint
    | FontSize
    | FontFamily
    | FontWeight
    | LineHeight
    | LetterSpacing
    | Size
    | Margin
    | Padding
    | BorderRadius
    | BorderWidth
    | BoxShadow
    | WidthOrHeight
    | ThemeObject<Color>;

export type AnyThemeObject =
    | ThemeObject<ThemeObjects>
    | ThemeArray<ThemeObjects>
    | undefined;

export interface Theme {
    readonly breakpoints?: ThemeObject<Breakpoint>;
    readonly fontSizes?: ThemeObject<FontSize>;
    readonly fontFamilies?: ThemeArray<FontFamily>;
    readonly fontWeights?: ThemeObject<FontWeight>;
    readonly lineHeights?: ThemeObject<LineHeight>;
    readonly letterSpacings?: ThemeObject<LetterSpacing>;
    readonly sizes?: ThemeObject<Size>;
    readonly borderRadii?: ThemeObject<BorderRadius>;
    readonly borderWidths?: ThemeObject<BorderWidth>;
    readonly boxShadows?: ThemeObject<BoxShadow>;
    readonly widths?: ThemeObject<WidthOrHeight>;
    readonly colors?: ThemeObject<ThemeObject<Color>>;
    [K: string]: AnyThemeObject;
}
