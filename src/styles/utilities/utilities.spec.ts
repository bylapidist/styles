import { Styles } from '../index';
import { withUtilities } from './index';

test('it renders the correct value', () => {
    const styles: Styles = {
        cursor: 'pointer',
        overflow: 'auto',
        overflowX: 'scroll',
        overflowY: 'hidden'
    };

    const values = withUtilities(styles);
    const expected =
        'cursor: pointer;overflow: auto;overflow-x: scroll;overflow-y: hidden;';

    expect(values).toEqual(expected);
});

test('it renders with missing value', () => {
    const styles: Styles = {
        overflow: 'auto',
        overflowX: 'scroll',
        overflowY: 'hidden'
    };

    const values = withUtilities(styles);
    const expected = 'overflow: auto;overflow-x: scroll;overflow-y: hidden;';

    expect(values).toEqual(expected);
});
