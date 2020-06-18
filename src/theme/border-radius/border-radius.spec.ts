import { borderRadius, Theme } from '../index';

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

    const values = borderRadius(theme, '1');

    expect(values).toEqual('0.125rem');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        borderRadius(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.borderRadii');
});
