import { color, Theme } from '../index';

const theme: Theme = {
    colors: {
        base: {
            white: 'white',
            black: 'black',
            transparent: 'transparent'
        }
    }
};

test('it retrieves the correct with ColorGroup', () => {
    const values = color(theme, { group: 'base', shade: 'white' });

    expect(values).toEqual('white');
});

test('it throws on invalid ColorGroup', () => {
    const values = (): void => {
        color(theme, { group: 'invalid1', shade: 'invalid2' });
    };

    expect(values).toThrow(
        'invalid1 or invalid2 does not exist on theme.colors'
    );
});

test('it passes through strings', () => {
    const values = color(theme, 'green');

    expect(values).toEqual('green');
});
