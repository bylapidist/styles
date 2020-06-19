import { Styles } from '../index';
import { withColors } from './index';
import { Theme } from '../../theme';

const theme: Theme = {
    colors: {
        base: {
            white: 'white',
            black: 'black',
            transparent: 'transparent'
        }
    }
};

test('it renders the correct value', () => {
    const styles: Styles = {
        backgroundColor: { group: 'base', shade: 'white' },
        textColor: { group: 'base', shade: 'white' },
        borderColor: { group: 'base', shade: 'white' },
        borderTopColor: { group: 'base', shade: 'white' },
        borderRightColor: { group: 'base', shade: 'white' },
        borderBottomColor: { group: 'base', shade: 'white' },
        borderLeftColor: { group: 'base', shade: 'white' }
    };

    const values = withColors(theme, styles);
    const expected =
        'background-color: white;text-color: white;border-color: white;border-top-color: white;border-right-color: white;border-bottom-color: white;border-left-color: white;';

    expect(values).toEqual(expected);
});

test('it passes through unknown props', () => {
    const styles: Styles = {
        textColor: 'invalid'
    };

    const values = withColors(theme, styles);
    const expected = 'text-color: invalid;';

    expect(values).toEqual(expected);
});

test('it throws on invalid value', () => {
    const styles: Styles = {
        backgroundColor: { group: 'invalid1', shade: 'invalid2' }
    };

    const values = (): void => {
        withColors(theme, styles);
    };

    expect(values).toThrow(
        'invalid1 or invalid2 does not exist on theme.colors'
    );
});
