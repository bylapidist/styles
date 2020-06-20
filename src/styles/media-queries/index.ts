import { Styles } from '../index';
import { breakpoint, Theme, ThemeObject } from '../../theme';
import { withBase } from '../base';
import { nestSelector } from '../../utilities/nest-selector';

export const withMediaQueries = (
    breakpoints: ThemeObject<Styles>,
    theme: Theme
): string =>
    nestSelector(
        breakpoints,
        ([bp, styles]) =>
            `@media only screen and (min-width: ${breakpoint(
                theme,
                bp
            )}) { ${withBase(theme, styles).trim()} }`
    );
