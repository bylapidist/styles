import * as CSS from 'csstype';

export * from './get-property';
export * from './merge-themes';

export type ThemeObject<T> = { [K: string]: T };

export type ThemeArray<T> = { [K: string]: T[] };

export type NumberOrString = string | number | 0 | undefined;

export type BorderRadius = CSS.BorderRadiusProperty<NumberOrString>;

export type BorderWidth =
    | CSS.BorderWidthProperty<NumberOrString>
    | CSS.BorderTopWidthProperty<NumberOrString>
    | CSS.BorderRightWidthProperty<NumberOrString>
    | CSS.BorderBottomWidthProperty<NumberOrString>
    | CSS.BorderLeftWidthProperty<NumberOrString>;

export type BorderStyle =
    | CSS.BorderBlockStyleProperty
    | CSS.BorderTopStyleProperty
    | CSS.BorderRightStyleProperty
    | CSS.BorderBottomStyleProperty
    | CSS.BorderLeftStyleProperty;

export type BoxShadow = CSS.BoxShadowProperty;

export type Breakpoint = string;

export type ColorGroup = { group: NumberOrString; shade: NumberOrString };

export type Color = CSS.ColorProperty;

export type ColorOrColorGroup = Color | ColorGroup;

export type FontFamily = CSS.FontFamilyProperty;

export type FontSize = CSS.FontSizeProperty<NumberOrString>;

export type FontWeight = CSS.FontWeightProperty;

export type LetterSpacing = CSS.LetterSpacingProperty<NumberOrString>;

export type LineHeight = CSS.LineHeightProperty<NumberOrString>;

export type Size = string;

export type TextAlign = CSS.TextAlignProperty;

export type Cursor = CSS.CursorProperty;

export type Opacity = CSS.OpacityProperty;

export type Overflow =
    | CSS.OverflowProperty
    | CSS.OverflowXProperty
    | CSS.OverflowYProperty;

export type Margin =
    | CSS.MarginProperty<NumberOrString>
    | CSS.MarginTopProperty<NumberOrString>
    | CSS.MarginRightProperty<NumberOrString>
    | CSS.MarginBottomProperty<NumberOrString>
    | CSS.MarginLeftProperty<NumberOrString>;

export type Padding =
    | CSS.PaddingProperty<NumberOrString>
    | CSS.PaddingTopProperty<NumberOrString>
    | CSS.PaddingRightProperty<NumberOrString>
    | CSS.PaddingBottomProperty<NumberOrString>
    | CSS.PaddingLeftProperty<NumberOrString>;

export type WidthOrHeight =
    | CSS.WidthProperty<NumberOrString>
    | CSS.HeightProperty<NumberOrString>;

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
