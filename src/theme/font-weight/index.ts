import { FontWeight, NumberOrString, Theme } from '../index';

export const fontWeight = (
    theme: Theme,
    fontWeight: NumberOrString
): FontWeight => {
    if (theme.fontWeights && theme.fontWeights[fontWeight]) {
        return theme.fontWeights[fontWeight];
    }

    throw new Error(`${fontWeight} does not exist on theme.fontWeights`);
};
