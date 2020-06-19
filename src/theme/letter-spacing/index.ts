import { LetterSpacing, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const letterSpacing = (
    theme: Theme,
    letterSpacing: NumberOrString
): LetterSpacing =>
    getProperty<LetterSpacing>(theme, 'letterSpacings', letterSpacing);
