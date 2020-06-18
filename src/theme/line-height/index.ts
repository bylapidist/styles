import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const lineHeight = (
    theme: Theme,
    lineHeight: NumberOrString
): CSS.LineHeightProperty<NumberOrString> => {
    if (theme.lineHeights && theme.lineHeights[lineHeight]) {
        return theme.lineHeights[lineHeight];
    }

    throw new Error(`${lineHeight} does not exist on theme.lineHeights`);
};
