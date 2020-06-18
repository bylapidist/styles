import { fontFamily, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        fontFamilies: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Georgia', 'Cambria', 'serif'],
            mono: ['Consolas', 'Courier New', 'monospace']
        }
    };

    const values = fontFamily(theme, 'serif');

    expect(values).toEqual('Georgia, Cambria, serif');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        fontFamily(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.fontFamilies');
});
