import { allBreakpoints, Theme } from '../index';

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

    const values = allBreakpoints(theme);

    expect(values).toEqual(['all', 'sm', 'md', 'lg', 'xl', 'xxl']);
});
