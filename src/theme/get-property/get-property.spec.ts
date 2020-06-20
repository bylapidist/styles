import { Theme } from '../index';
import { getProperty } from './index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        borderRadii: {
            '0': '0',
            '1': '0.125rem',
            '2': '0.25rem',
            '3': '0.375rem',
            '4': '0.5rem',
            px: '1px',
            rounded: '9999px'
        }
    };

    const values = getProperty(theme, 'borderRadii', '1');

    expect(values).toEqual('0.125rem');
});

test('it passes through unknown values', () => {
    const theme: Theme = {};

    const values = getProperty(theme, 'borderRadii', '-1');

    expect(values).toEqual('-1');
});

test('it works with array properties', () => {
    const theme: Theme = {
        fontFamilies: {
            sans: ['hello', 'world']
        }
    };

    const values = getProperty(theme, 'fontFamilies', 'sans');

    expect(values).toEqual('hello, world');
});

test('it works with color groups', () => {
    const theme: Theme = {
        colors: {
            base: {
                white: 'white',
                black: 'black',
                transparent: 'transparent'
            }
        }
    };

    const values = getProperty(theme, 'colors', {
        group: 'base',
        shade: 'white'
    });

    expect(values).toEqual('white');
});
