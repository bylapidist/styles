import {
    Breakpoint,
    Variant,
    Range,
    FontFamily,
    Color,
    Fraction,
    Elevation,
    BorderWidth,
    BorderRadius,
    Size,
    LetterSpacing,
    LineHeight,
    FontWeight,
    Transition
} from './types';

export const BREAKPOINTS: Variant<Breakpoint> = {
    all: 'all',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xlarge: 'xlarge',
    xxlarge: 'xxlarge'
};

export const FONT_SIZES: Variant<Range> = {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900'
};

export const FONT_FAMILIES: Variant<FontFamily> = {
    sans: 'sans',
    serif: 'serif',
    mono: 'mono'
};

export const FONT_WEIGHTS: Variant<FontWeight> = {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900'
};

export const LINE_HEIGHTS: Variant<LineHeight> = {
    none: 'none',
    tightest: 'tightest',
    tighter: 'tighter',
    looser: 'looser',
    loosest: 'loosest'
};

export const LETTER_SPACINGS: Variant<LetterSpacing> = {
    none: 'none',
    tightest: 'tightest',
    tighter: 'tighter',
    looser: 'looser',
    loosest: 'loosest'
};

export const SIZES: Variant<Size> = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    8: 8,
    10: 10,
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    56: 56,
    64: 64,
    128: 128,
    256: 256
};

export const BORDER_RADII: Variant<BorderRadius> = {
    none: 'none',
    squarest: 'squarest',
    squarer: 'squarer',
    rounder: 'rounder',
    roundest: 'roundest'
};

export const BORDER_WIDTHS: Variant<BorderWidth> = {
    none: 'none',
    thinnest: 'thinnest',
    thinner: 'thinner',
    thicker: 'thicker',
    thickest: 'thickest'
};

export const ELEVATIONS: Variant<Elevation> = {
    none: 'none',
    lowest: 'lowest',
    lower: 'lower',
    higher: 'higher',
    highest: 'highest'
};

export const FRACTIONS: Variant<Fraction> = {
    '1-2': '1-2',
    '1-3': '1-3',
    '2-3': '2-3',
    '1-4': '1-4',
    '2-4': '2-4',
    '3-4': '3-4',
    '1-5': '1-5',
    '2-5': '2-5',
    '3-5': '3-5',
    '4-5': '4-5',
    '1-6': '1-6',
    '2-6': '2-6',
    '3-6': '3-6',
    '4-6': '4-6',
    '5-6': '5-6',
    '1-12': '1-12',
    '2-12': '2-12',
    '3-12': '3-12',
    '4-12': '4-12',
    '5-12': '5-12',
    '6-12': '6-12',
    '7-12': '7-12',
    '8-12': '8-12',
    '9-12': '9-12',
    '10-12': '10-12',
    '11-12': '11-12',
    full: 'full',
    screenX: 'screenX',
    screenY: 'screenY'
};

export const COLORS: Variant<Color> = {
    lightest: 'lightest',
    light: 'light',
    dark: 'dark',
    darkest: 'darkest'
};

export const TRANSITIONS: Variant<Transition> = {
    'ease-in-slow': 'ease-in-slow',
    'ease-out-slow': 'ease-out-slow',
    'ease-in-fast': 'ease-in-fast',
    'ease-out-fast': 'ease-out-fast'
};
