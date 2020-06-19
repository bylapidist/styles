import { Styles } from '../index';
import { Theme, ThemeObject } from '../../theme';
import { withBase } from '../base';

const withNestingSelectors = (
    pseudoSelectors: ThemeObject<Styles>,
    theme: Theme
): string =>
    Object.entries(pseudoSelectors)
        .map(
            ([selector, styles]) => `
            ${selector} {
                ${withBase(theme, styles)}
            }
        `
        )
        .join('');

export const withNesting = (theme: Theme, styles?: Styles): string =>
    styles && styles.pseudo
        ? `
        ${withNestingSelectors(styles.pseudo, theme)}
    `
        : '';
