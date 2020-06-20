import { Styles } from '../index';
import { withTypography } from './index';
import { Theme } from '../../theme';

const theme: Theme = {
    fontSizes: {
        '1': '0.75rem',
        '2': '0.875rem',
        '3': '1rem',
        '4': '1.125rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.875rem',
        '8': '2.25rem',
        '9': '3rem',
        '10': '4rem'
    },
    fontFamilies: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['Consolas', 'Courier New', 'monospace']
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
    },
    lineHeights: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    }
};

test('it renders the correct value', () => {
    const styles: Styles = {
        fontSize: '1',
        fontWeight: 400,
        fontFamily: 'sans',
        lineHeight: 'loose',
        letterSpacing: 'narrow'
    };

    const values = withTypography(theme, styles);
    const expected =
        'font-size: 0.75rem;font-weight: 400;font-family: Montserrat, sans-serif;line-height: 2;letter-spacing: narrow;';

    expect(values).toEqual(expected);
});

test('it passes through unknown props', () => {
    const styles: Styles = {
        fontFamily: 'invalid',
        lineHeight: 1
    };

    const values = withTypography(theme, styles);
    const expected = 'font-family: invalid;line-height: 1;';

    expect(values).toEqual(expected);
});
