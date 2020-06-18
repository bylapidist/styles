import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const letterSpacing = (
    theme: Theme,
    letterSpacing: NumberOrString
): CSS.LetterSpacingProperty<NumberOrString> => {
    if (theme.letterSpacings && theme.letterSpacings[letterSpacing]) {
        return theme.letterSpacings[letterSpacing];
    }

    throw new Error(`${letterSpacing} does not exist on theme.letterSpacings`);
};
