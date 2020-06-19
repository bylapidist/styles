import { getProperty, LetterSpacing, NumberOrString, Theme } from '../index';

export const letterSpacing = (
    theme: Theme,
    letterSpacing: NumberOrString
): LetterSpacing =>
    getProperty<LetterSpacing>(theme, 'letterSpacings', letterSpacing);
