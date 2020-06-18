import * as CSS from 'csstype';
import { NumberOrString, Theme } from './index';

export const fontWeight = (
    theme: Theme,
    fontWeight: NumberOrString
): CSS.FontWeightProperty => {
    if (theme.fontWeights && theme.fontWeights[fontWeight]) {
        return theme.fontWeights[fontWeight];
    }

    throw new Error(`${fontWeight} does not exist on theme.fontWeights`);
};
