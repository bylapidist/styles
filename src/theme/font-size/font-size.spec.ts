import { fontSize, Theme } from '../index';

test('it retrieves the correct value', () => {
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
        }
    };

    const values = fontSize(theme, '1');

    expect(values).toEqual('0.75rem');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        fontSize(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.fontSizes');
});
