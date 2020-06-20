import { Styles } from '../index';
import { Theme, ThemeObject } from '../../theme';
import { withBase } from '../base';
import { nestSelector } from '../../utilities/nest-selector';

const withNestingSelectors = (
    pseudoSelectors: ThemeObject<Styles>,
    theme: Theme
): string =>
    nestSelector(
        pseudoSelectors,
        ([selector, styles]) =>
            `${selector} { ${withBase(theme, styles).trim()} }`
    );

export const withNesting = (theme: Theme, styles: Styles): string =>
    styles.pseudo ? withNestingSelectors(styles.pseudo, theme) : '';
