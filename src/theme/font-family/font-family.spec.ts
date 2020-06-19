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
