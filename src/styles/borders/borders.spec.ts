import { Styles } from '../index';
import { withBorders } from './index';
import { Theme } from '../../theme';

const theme: Theme = {
    borderRadii: {
        '0': '0',
        '1': '0.125rem',
        '2': '0.25rem',
        '3': '0.375rem',
        '4': '0.5rem',
        px: '1px',
        rounded: '9999px'
    },
    borderWidths: {
        '0': '0',
        '1': '2px',
        '2': '4px',
        '3': '8px',
        px: '1px'
    },
    boxShadows: {
        '0': 'none',
        '1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    }
};

test('it renders the correct value', () => {
    const styles: Styles = {
        boxShadow: '1',
        borderRadius: '2',
        borderWidth: 'px'
    };

    const values = withBorders(theme, styles);
    const expected =
        'border-radius: 0.25rem;border-width: 1px;box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);';

    expect(values).toEqual(expected);
});

test('it passes through unknown props', () => {
    const styles: Styles = {
        boxShadow: 'invalid',
        borderRadius: '-2',
        borderWidth: '100px'
    };

    const values = withBorders(theme, styles);
    const expected =
        'border-radius: -2;border-width: 100px;box-shadow: invalid;';

    expect(values).toEqual(expected);
});
