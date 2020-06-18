import { FontSize, NumberOrString, Theme } from '../index';

export const fontSize = (theme: Theme, size: NumberOrString): FontSize => {
    if (theme.fontSizes && theme.fontSizes[size]) {
        return theme.fontSizes[size];
    }

    throw new Error(`${size} does not exist on theme.fontSizes`);
};
