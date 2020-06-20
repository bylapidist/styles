import { Styles } from '../index';
import { Theme } from '../../theme';
import { withBase } from '../base';
import { nestSelector } from '../../theme/nest-selector';

export const withNesting = (theme: Theme, styles: Styles): string =>
    styles.pseudo
        ? nestSelector(
              styles.pseudo,
              ([selector, styles]) =>
                  `${selector} { ${withBase(theme, styles).trim()} }`
          )
        : '';
