import { mergeStyles } from './index';
import { Styles } from '../index';

test('it merges styles', () => {
    const styles1: Styles = {
        margin: '1',
        paddingX: '1',
        pseudo: {
            ':hover': {
                paddingX: '2'
            }
        },
        breakpoints: {
            md: {
                margin: '2'
            }
        }
    };

    const styles2: Styles = {
        margin: '2',
        paddingX: '2'
    };

    const values = mergeStyles(styles1, styles2);

    expect(values).toEqual({
        margin: '2',
        paddingX: '2',
        pseudo: {
            ':hover': {
                paddingX: '2'
            }
        },
        breakpoints: {
            md: {
                margin: '2'
            }
        }
    });
});
