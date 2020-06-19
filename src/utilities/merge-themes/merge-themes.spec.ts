import { mergeThemes } from './index';
import { Theme } from '../../theme';

test('it merges themes', () => {
    const theme1: Theme = {
        boxShadows: {
            '0': 'none',
            '1':
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }
    };

    const theme2: Theme = {
        boxShadows: {
            '0': 'test1',
            '3': 'test2'
        },
        lineHeights: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2'
        }
    };

    const values = mergeThemes(theme1, theme2);

    expect(values).toEqual({
        boxShadows: {
            '0': 'test1',
            '1':
                '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            '3': 'test2'
        },
        lineHeights: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2'
        }
    });
});
