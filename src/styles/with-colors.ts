import { Styles } from './index';
import { color, Theme } from '../theme';

export const withColors = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${
            styles.backgroundColor
                ? `background-color: ${color(
                      theme,
                      styles.backgroundColor.group,
                      styles.backgroundColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderTopColor
                ? `border-top-color: ${color(
                      theme,
                      styles.borderTopColor.group,
                      styles.borderTopColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderRightColor
                ? `border-right-color: ${color(
                      theme,
                      styles.borderRightColor.group,
                      styles.borderRightColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderBottomColor
                ? `border-bottom-color: ${color(
                      theme,
                      styles.borderBottomColor.group,
                      styles.borderBottomColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderLeftColor
                ? `border-left-color: ${color(
                      theme,
                      styles.borderLeftColor.group,
                      styles.borderLeftColor.shade
                  )};`
                : ''
        }

        ${
            styles.borderColor
                ? `border-color: ${color(
                      theme,
                      styles.borderColor.group,
                      styles.borderColor.shade
                  )};`
                : ''
        }
    `
        : '';
