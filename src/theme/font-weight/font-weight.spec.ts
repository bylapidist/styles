import { fontWeight, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
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
        }
    };

    const values = fontWeight(theme, 'light');

    expect(values).toEqual(300);
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        fontWeight(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.fontWeights');
});
