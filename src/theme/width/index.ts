import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const width = (
    theme: Theme,
    width: NumberOrString
): CSS.WidthProperty<NumberOrString> => {
    if (theme.widths && theme.widths[width]) {
        return theme.widths[width];
    }

    throw new Error(`${width} does not exist on theme.widths`);
};
