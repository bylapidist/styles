import { Styles } from '../index';
import { withUtilities } from './index';

test('it renders the correct value', () => {
    const styles: Styles = {
        position: 'relative',
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
        flex: '1 1 0%',
        flexWrap: 'wrap',
        listStyleType: 'decimal',
        listStylePosition: 'inside',
        content: "''",
        top: '0',
        right: 'auto',
        bottom: '50%',
        left: '2px',
        objectPosition: '50% 50%',
        objectFit: 'scale-down'
    };

    const values = withUtilities(styles);
    const expected =
        "border-style: solid;border-top-style: dashed;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;text-align: center;content: '';cursor: pointer;overflow: auto;overflow-x: scroll;overflow-y: hidden;display: flex;flex: 1 1 0%;flex-wrap: wrap;list-style-type: decimal;list-style-position: inside;position: relative;object-fit: scale-down;object-position: 50% 50%;top: 0;bottom: 50%;right: auto;left: 2px;";

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
