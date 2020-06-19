import { borderWidth, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        borderWidths: {
            '0': '0',
            '1': '2px',
            '2': '4px',
            '3': '8px',
            px: '1px'
        }
    };

    const values = borderWidth(theme, '1');

    expect(values).toEqual('2px');
});
