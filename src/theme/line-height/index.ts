import { LineHeight, NumberOrString, Theme } from '../index';

export const lineHeight = (
    theme: Theme,
    lineHeight: NumberOrString
): LineHeight => {
    if (theme.lineHeights && theme.lineHeights[lineHeight]) {
        return theme.lineHeights[lineHeight];
    }

    throw new Error(`${lineHeight} does not exist on theme.lineHeights`);
};
