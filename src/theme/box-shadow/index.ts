import { BoxShadow, NumberOrString, Theme } from '../index';

export const boxShadow = (
    theme: Theme,
    boxShadow: NumberOrString
): BoxShadow => {
    if (theme.boxShadows && theme.boxShadows[boxShadow]) {
        return theme.boxShadows[boxShadow];
    }

    throw new Error(`${boxShadow} does not exist on theme.boxShadows`);
};
