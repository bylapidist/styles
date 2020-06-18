import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const fontSize = (
    theme: Theme,
    size: NumberOrString
): CSS.FontSizeProperty<NumberOrString> => {
    if (theme.fontSizes && theme.fontSizes[size]) {
        return theme.fontSizes[size];
    }

    throw new Error(`${size} does not exist on theme.fontSizes`);
};
