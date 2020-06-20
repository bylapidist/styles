import { Styles } from '../index';
import { Theme } from '../../theme';
import { withColors } from './index';

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
        'background-color: white;color: white;border-color: white;border-top-color: white;border-right-color: white;border-bottom-color: white;border-left-color: white;';

    expect(values).toEqual(expected);
});

test('it passes through unknown props', () => {
    const styles: Styles = {
        textColor: 'invalid'
    };

    const values = withColors(theme, styles);
    const expected = 'color: invalid;';

    expect(values).toEqual(expected);
});
