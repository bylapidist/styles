import { Styles } from '../index';
import { withDimensions } from './index';
import { Theme } from '../../theme';

const theme: Theme = {
    breakpoints: {
        all: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px'
    },
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
    },
    widths: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw'
    }
};

test('it renders the correct value', () => {
    const styles: Styles = {
        width: '1/2',
        sizeWidth: 1,
        containerWidth: 'md'
    };

    const values = withDimensions(theme, styles);
    const expected = 'width: 50%;width: 768px;width: 0.25rem;';

    expect(values).toEqual(expected);
});

test('it passes through unknown props', () => {
    const styles: Styles = {
        width: '1',
        sizeWidth: 'invalid',
        containerWidth: '1/2'
    };

    const values = withDimensions(theme, styles);
    const expected = 'width: 1;width: 1/2;width: invalid;';

    expect(values).toEqual(expected);
});
