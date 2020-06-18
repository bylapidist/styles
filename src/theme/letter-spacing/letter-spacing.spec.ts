import { letterSpacing, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        }
    };

    const values = letterSpacing(theme, 'tight');

    expect(values).toEqual('-0.025em');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        letterSpacing(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.letterSpacings');
});
