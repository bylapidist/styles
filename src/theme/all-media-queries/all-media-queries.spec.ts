import { allMediaQueries, Theme } from '../index';

test('it retrieves the correct value', () => {
    const theme: Theme = {
        breakpoints: {
            all: '0px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1440px'
        }
    };

    const values = allMediaQueries(theme);

    expect(values).toEqual({
        all: '(min-width: 0px)',
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
        xxl: '(min-width: 1440px)'
    });
});
