import * as CSS from 'csstype';
import { NumberOrString, Theme } from './index';

export const boxShadow = (
    theme: Theme,
    boxShadow: NumberOrString
): CSS.BoxShadowProperty => {
    if (theme.boxShadows && theme.boxShadows[boxShadow]) {
        return theme.boxShadows[boxShadow];
    }

    throw new Error(`${boxShadow} does not exist on theme.boxShadows`);
};
