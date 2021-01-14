import { Styles } from '../index';
import { withUtilities } from './index';

test('it renders the correct value', () => {
    const styles: Styles = {
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'auto',
        overflowX: 'scroll',
        overflowY: 'hidden',
        borderStyle: 'solid',
        borderTopStyle: 'dashed',
        borderRightStyle: 'solid',
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        display: 'flex',
        flex: '1 1 0%'
    };

    const values = withUtilities(styles);
    const expected =
        'border-style: solid;border-top-style: dashed;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;text-align: center;cursor: pointer;overflow: auto;overflow-x: scroll;overflow-y: hidden;display: flex;flex: 1 1 0%;';

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
