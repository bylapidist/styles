import { color, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        colors: {
            base: {
                white: 'white',
                black: 'black',
                transparent: 'transparent'
            },
            grey: {
                lightest: '#E8E8E8',
                light: '#d4d4d4',
                base: '#7c7e93',
                dark: '#292B3E'
            },
            primary: {
                lightest: '#9bfff8',
                light: '#4AD6D8',
                base: '#17a3a5',
                dark: '#007072'
            },
            secondary: {
                lightest: '#fdffb5',
                light: '#fff08f',
                base: '#ebc764',
                dark: '#c99944'
            },
            tertiary: {
                lightest: '#e2f7c9',
                light: '#A7D981',
                base: '#72af5d',
                dark: '#5A8C34'
            },
            danger: {
                lightest: '#FF848B',
                light: '#E75158',
                base: '#b41e25',
                dark: '#810000'
            }
        }
    };

    const values = color(theme, { group: 'base', shade: 'white' });

    expect(values).toEqual('white');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        color(theme, { group: 'invalid1', shade: 'invalid2' });
    };

    expect(values).toThrow(
        'invalid1 or invalid2 does not exist on theme.colors'
    );
});
