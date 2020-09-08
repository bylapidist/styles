import { Styles } from '../index';
import { Theme } from '../../theme';
import { withNesting } from './index';

const theme: Theme = {
    fontSizes: {
        '1': '0.75rem',
        '2': '0.875rem',
        '3': '1rem',
        '4': '1.125rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.875rem',
        '8': '2.25rem',
        '9': '3rem',
        '10': '4rem'
    }
};

test('it renders the correct value', () => {
    const styles: Styles = {
        pseudo: {
            ':hover': {
                fontSize: '2'
            },
            ':focus': {
                fontSize: '3'
            }
        }
    };
    const values = withNesting(theme, styles);
    const expected =
        ':hover { font-size: 0.875rem; } :focus { font-size: 1rem; }';

    expect(values).toEqual(expected);
});
