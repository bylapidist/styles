import { Styles } from '../index';
import { Theme, ThemeObject } from '../../theme';
import { withMediaQueries } from './index';

const theme: Theme = {
    breakpoints: {
        all: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px'
    }
};

const themeObject: ThemeObject<Styles> = {
    md: {
        fontSize: '1px'
    },
    lg: {
        fontSize: '2px'
    }
};

test('it renders the correct value', () => {
    const values = withMediaQueries(themeObject, theme);
    const expected =
        '@media only screen and (min-width: 768px) { font-size: 1px; } @media only screen and (min-width: 1024px) { font-size: 2px; }';

    expect(values).toEqual(expected);
});
