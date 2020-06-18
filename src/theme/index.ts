import * as CSS from 'csstype';

export type ThemeObject<T> = { [K: string]: T };

export type ThemeArray<T> = { [K: string]: T[] };

export type NumberOrString = string | number | 0;

export type Color = { group: NumberOrString; shade: NumberOrString };

export interface Theme {
    readonly breakpoints?: ThemeObject<string>;
    readonly fontSizes?: ThemeObject<CSS.FontSizeProperty<NumberOrString>>;
    readonly fontFamilies?: ThemeArray<CSS.FontFamilyProperty>;
    readonly fontWeights?: ThemeObject<CSS.FontWeightProperty>;
    readonly lineHeights?: ThemeObject<CSS.LineHeightProperty<NumberOrString>>;
    readonly letterSpacings?: ThemeObject<
        CSS.LetterSpacingProperty<NumberOrString>
    >;
    readonly sizes?: ThemeObject<string>;
    readonly borderRadii?: ThemeObject<
        CSS.BorderRadiusProperty<NumberOrString>
    >;
    readonly borderWidths?: ThemeObject<
        CSS.BorderWidthProperty<NumberOrString>
    >;
    readonly boxShadows?: ThemeObject<CSS.BoxShadowProperty>;
    readonly widths?: ThemeObject<string>;
    readonly colors?: ThemeObject<ThemeObject<CSS.ColorProperty>>;
}

export * from './all-breakpoints';
export * from './all-media-queries';
export * from './border-radius';
export * from './border-width';
export * from './box-shadow';
export * from './breakpoint';
export * from './color';
export * from './font-family';
export * from './font-size';
export * from './font-weight';
export * from './letter-spacing';
export * from './line-height';
export * from './size';
export * from './width';
export * from './merge-themes';
