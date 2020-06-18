import { NumberOrString, Size, Theme } from '../index';

export const size = (theme: Theme, size: NumberOrString): Size => {
    if (theme.sizes && theme.sizes[size]) {
        return theme.sizes[size];
    }

    throw new Error(`${size} does not exist on theme.sizes`);
};
