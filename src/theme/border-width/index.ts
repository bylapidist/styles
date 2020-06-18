import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const borderWidth = (
    theme: Theme,
    borderWidth: NumberOrString
): CSS.BorderWidthProperty<NumberOrString> => {
    if (theme.borderWidths && theme.borderWidths[borderWidth]) {
        return theme.borderWidths[borderWidth];
    }

    throw new Error(`${borderWidth} does not exist on theme.borderWidths`);
};
