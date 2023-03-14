import { Theme } from '../types';
import {
    BREAKPOINTS,
    FONT_SIZES,
    FONT_WEIGHTS,
    FONT_FAMILIES,
    LINE_HEIGHTS,
    BORDER_RADII,
    BORDER_WIDTHS,
    COLORS,
    LETTER_SPACINGS,
    ELEVATIONS,
    FRACTIONS,
    SIZES
} from '../variants';

const theme: Theme = {
    breakpoint: {
        variants: [...Object.values(BREAKPOINTS)],
        values: ['0px', '640px', '768px', '1024px', '1280px', '1440px']
    },
    'font-size': {
        variants: [...Object.values(FONT_SIZES)],
        values: [
            '0.75rem',
            '0.875rem',
            '1rem',
            '1.125rem',
            '1.25rem',
            '1.5rem',
            '1.875rem',
            '2.25rem',
            '3rem'
        ]
    },
    'font-weight': {
        variants: [...Object.values(FONT_WEIGHTS)],
        values: [...Object.values(FONT_WEIGHTS)]
    },
    'font-family': {
        variants: [...Object.values(FONT_FAMILIES)],
        values: [
            'Inter, sans-serif',
            'Georgia, Cambria, serif',
            'Consolas, Courier, monospace'
        ]
    },
    'line-height': {
        variants: [...Object.values(LINE_HEIGHTS)],
        values: ['1', '1.25', '1.375', '1.5', '2']
    },
    'border-radius': {
        variants: [...Object.values(BORDER_RADII)],
        values: ['0', '0.125rem', '0.3rem', '1.6rem', '9999px']
    },
    'border-width': {
        variants: [...Object.values(BORDER_WIDTHS)],
        values: ['0', '1px', '2px', '3px', '4px']
    },
    'color-primary': {
        variants: [...Object.values(COLORS)],
        values: ['#9bfff8', '#4ad6d8', '#17a3a5', '#135f61']
    },
    'color-secondary': {
        variants: [...Object.values(COLORS)],
        values: ['#fdffb5', '#fff08f', '#ebc764', '#937032']
    },
    'color-tertiary': {
        variants: [...Object.values(COLORS)],
        values: ['#e2f7c9', '#a7d981', '#72af5d', '#548230']
    },
    'color-grey': {
        variants: [...Object.values(COLORS)],
        values: ['#fafafa', '#d4d4d4', '#73748b', '#292b3e']
    },
    'color-danger': {
        variants: [...Object.values(COLORS)],
        values: ['#ff848B', '#e75158', '#b41e25', '#810000']
    },
    'letter-spacing': {
        variants: [...Object.values(LETTER_SPACINGS)],
        values: ['0', '-0.05em', '-0.025em', '0.025em', '0.05em']
    },
    elevation: {
        variants: [...Object.values(ELEVATIONS)],
        values: [
            'none',
            '0 2px 3px rgba(0, 0, 0, 0.1)',
            '0 2px 4px rgba(0, 0, 0, 0.12), 0 10px 13px rgba(0, 0, 0, 0.02), 0 -10px 13px rgba(0, 0, 0, 0.02)',
            '0 2px 5px rgba(0, 0, 0, 0.16), -10px 15px 15px rgba(0, 0, 0, 0.03), 10px 0px 15px rgba(0, 0, 0, 0.03)',
            '0 2px 6px rgba(0, 0, 0, 0.18), -15px 20px 20px rgba(0, 0, 0, 0.04), 15px -5px 20px rgba(0, 0, 0, 0.04)'
        ]
    },
    fraction: {
        variants: [...Object.values(FRACTIONS)],
        values: [
            '50%',
            '33.333333%',
            '66.666667%',
            '25%',
            '50%',
            '75%',
            '20%',
            '40%',
            '60%',
            '80%',
            '16.666667%',
            '33.333333%',
            '50%',
            '66.666667%',
            '83.333333%',
            '8.333333%',
            '16.666667%',
            '25%',
            '33.333333%',
            '41.666667%',
            '50%',
            '58.333333%',
            '66.666667%',
            '75%',
            '83.333333%',
            '91.666667%',
            '100%',
            '100vw',
            '100vh'
        ]
    },
    size: {
        variants: [...Object.values(SIZES)],
        values: [
            '0',
            '0.25rem',
            '0.5rem',
            '0.75rem',
            '1rem',
            '1.25rem',
            '1.5rem',
            '2rem',
            '2.5rem',
            '3rem',
            '4rem',
            '5rem',
            '6rem',
            '8rem',
            '10rem',
            '12rem',
            '14rem',
            '16rem',
            '32rem',
            '40rem'
        ]
    }
};

export default theme;
