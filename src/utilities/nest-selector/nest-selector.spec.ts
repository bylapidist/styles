import { nestSelector } from './index';

test('it nests selectors', () => {
    const values = nestSelector(
        {
            ':hover': {
                fontWeight: 'bold'
            }
        },
        ([selector, styles]) =>
            `${selector} { font-weight: ${styles.fontWeight}; }`
    );

    expect(values).toEqual(`:hover { font-weight: bold; }`);
});
