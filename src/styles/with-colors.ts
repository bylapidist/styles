import { Styles } from './index';
import { color, Theme } from '../theme';

export const withColors = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${
            styles.backgroundColor
                ? `background-color: ${color(theme, {
                      group: styles.backgroundColor.group,
                      shade: styles.backgroundColor.shade
                  })};`
                : ''
        }

        ${
            styles.borderTopColor
                ? `border-top-color: ${color(theme, {
                      group: styles.borderTopColor.group,
                      shade: styles.borderTopColor.shade
                  })};`
                : ''
        }

        ${
            styles.borderRightColor
                ? `border-right-color: ${color(theme, {
                      group: styles.borderRightColor.group,
                      shade: styles.borderRightColor.shade
                  })};`
                : ''
        }

        ${
            styles.borderBottomColor
                ? `border-bottom-color: ${color(theme, {
                      group: styles.borderBottomColor.group,
                      shade: styles.borderBottomColor.shade
                  })};`
                : ''
        }

        ${
            styles.borderLeftColor
                ? `border-left-color: ${color(theme, {
                      group: styles.borderLeftColor.group,
                      shade: styles.borderLeftColor.shade
                  })};`
                : ''
        }

        ${
            styles.borderColor
                ? `border-color: ${color(theme, {
                      group: styles.borderColor.group,
                      shade: styles.borderColor.shade
                  })};`
                : ''
        }

        ${
            styles.textColor
                ? `color: ${color(theme, {
                      group: styles.textColor.group,
                      shade: styles.textColor.shade
                  })};`
                : ''
        }
    `
        : '';
