import { Styles } from '../index';
import { Theme } from '../../theme';
import { withBase } from '../base';
import { withMediaQueries } from '../media-queries';
import { withNesting } from '../nesting';

export const withStyles = (theme: Theme, styles?: Styles): string =>
    styles
        ? [
              withBase(theme, styles),
              withMediaQueries(theme, styles),
              withNesting(theme, styles)
          ]
              .join(' ')
              .trim()
        : '';
