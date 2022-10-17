import * as CSS from 'csstype';

export type Themes = 'light' | 'dark';

export type NumberOrString = string | number | 0 | undefined;

export type ThemeCategory<T, K> = {
    readonly variants: T[];
    readonly values: K[];
    [K: string]: T[] | K[];
};

export type Variant<T> = {
    [K: string]: T;
};

export type Range =
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

export type SpacingRange =
    | 'none'
    | 'tightest'
    | 'tighter'
    | 'looser'
    | 'loosest';

export type Breakpoint =
    | 'all'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';

export type FontSize = Range;

export type FontFamily = 'sans' | 'serif' | 'mono';

export type FontWeight = Range;

export type LineHeight = SpacingRange;

export type LetterSpacing = SpacingRange;

export type Size =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 8
    | 10
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64
    | 128
    | 256;

export type BorderRadius =
    | 'none'
    | 'squarest'
    | 'squarer'
    | 'rounder'
    | 'roundest';

export type BorderWidth =
    | 'none'
    | 'thinnest'
    | 'thinner'
    | 'thicker'
    | 'thickest';

export type Elevation = 'none' | 'lowest' | 'lower' | 'higher' | 'highest';

export type Fraction =
    | '1-2'
    | '1-3'
    | '2-3'
    | '1-4'
    | '2-4'
    | '3-4'
    | '1-5'
    | '2-5'
    | '3-5'
    | '4-5'
    | '1-6'
    | '2-6'
    | '3-6'
    | '4-6'
    | '5-6'
    | '1-12'
    | '2-12'
    | '3-12'
    | '4-12'
    | '5-12'
    | '6-12'
    | '7-12'
    | '8-12'
    | '9-12'
    | '10-12'
    | '11-12'
    | 'full'
    | 'screenX'
    | 'screenY';

export type Color = 'lightest' | 'light' | 'dark' | 'darkest';

export type Theme = {
    readonly breakpoint: ThemeCategory<Breakpoint, NumberOrString>;
    readonly 'font-size': ThemeCategory<FontSize, CSS.Property.FontSize>;
    readonly 'font-family': ThemeCategory<FontFamily, CSS.Property.FontFamily>;
    readonly 'font-weight': ThemeCategory<FontWeight, CSS.Property.FontWeight>;
    readonly 'line-height': ThemeCategory<LineHeight, CSS.Property.LineHeight>;
    readonly 'letter-spacing': ThemeCategory<
        LetterSpacing,
        CSS.Property.LetterSpacing
    >;
    readonly size: ThemeCategory<Size, NumberOrString>;
    readonly 'border-radius': ThemeCategory<
        BorderRadius,
        CSS.Property.BorderRadius
    >;
    readonly 'border-width': ThemeCategory<
        BorderWidth,
        CSS.Property.BorderWidth
    >;
    readonly elevation: ThemeCategory<Elevation, CSS.Property.BoxShadow>;
    readonly fraction: ThemeCategory<Fraction, CSS.Property.Width>;
    readonly 'color-grey': ThemeCategory<Color, CSS.Property.Color>;
    readonly 'color-primary': ThemeCategory<Color, CSS.Property.Color>;
    readonly 'color-secondary': ThemeCategory<Color, CSS.Property.Color>;
    readonly 'color-tertiary': ThemeCategory<Color, CSS.Property.Color>;
    readonly 'color-danger': ThemeCategory<Color, CSS.Property.Color>;
    [K: string]: ThemeCategory<unknown, NumberOrString>;
};
