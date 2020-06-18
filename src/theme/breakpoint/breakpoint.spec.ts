import { breakpoint, Theme } from '../index';

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

    const values = breakpoint(theme, 'sm');

    expect(values).toEqual('640px');
});

test('it throws on invalid value', () => {
    const theme: Theme = {};

    const values = (): void => {
        breakpoint(theme, 'invalid');
    };

    expect(values).toThrow('invalid does not exist on theme.breakpoints');
});
