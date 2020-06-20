import { Styles } from '../index';
import { withStyles } from './index';
import { Theme } from '../../theme';

const theme: Theme = {
    sizes: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        auto: 'auto',
        px: '1px'
    }
};

test('it renders the correct value', () => {
    const styles: Styles = {
        margin: '1',
        paddingX: '1',
        pseudo: {
            ':hover': {
                paddingX: '2'
            }
        },
        breakpoints: {
            md: {
                margin: '2'
            }
        }
    };

    const values = withStyles(theme, styles);
    const expected =
        'margin: 0.25rem;padding-left: 0.25rem;padding-right: 0.25rem; @media only screen and (min-width: md) { margin: 0.5rem; } :hover { padding-left: 0.5rem;padding-right: 0.5rem; }';

    expect(values).toEqual(expected);
});

test('it passes through unknown props', () => {
    const styles: Styles = {
        margin: -1,
        paddingX: '40px'
    };

    const values = withStyles(theme, styles);
    const expected = 'margin: -1;padding-left: 40px;padding-right: 40px;';

    expect(values).toEqual(expected);
});
