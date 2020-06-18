import { lineHeight, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        lineHeights: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2'
        }
    };

    const values = lineHeight(theme, 'tight');

    expect(values).toEqual('1.25');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        lineHeight(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.lineHeights');
});
