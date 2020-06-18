import { boxShadow, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        boxShadows: {
            '0': 'none',
            '1':
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }
    };

    const values = boxShadow(theme, '1');

    expect(values).toEqual(
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    );
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        boxShadow(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.boxShadows');
});
