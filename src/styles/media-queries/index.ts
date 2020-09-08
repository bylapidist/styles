import { Styles } from '../index';
import { Theme } from '../../theme';
import { withBase } from '../base';
import { nestSelector } from '../../theme/nest-selector';
import { getProperty } from '../../theme/get-property';

export const withMediaQueries = (theme: Theme, styles: Styles): string =>
    styles.breakpoints
        ? nestSelector(
              styles.breakpoints,
              ([bp, styles]) =>
                  `@media only screen and (min-width: ${getProperty<string>(
                      theme,
                      'breakpoints',
                      bp
                  )}) { ${withBase(theme, styles).trim()} }`
          )
        : '';
