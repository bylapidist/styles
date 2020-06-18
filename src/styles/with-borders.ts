import { Styles } from './index';
import { borderRadius, borderWidth, boxShadow, Theme } from '../theme';

export const withBorders = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
       ${
           styles.borderRadius
               ? `border-radius: ${borderRadius(theme, styles.borderRadius)};`
               : ''
       }

        ${
            styles.borderWidth
                ? `
                border: solid;
                border-width: ${borderWidth(theme, styles.borderWidth)};`
                : ''
        }

        ${
            styles.borderTopWidth
                ? `
                border-top: solid;
                border-top-width: ${borderWidth(theme, styles.borderTopWidth)};`
                : ''
        }

        ${
            styles.borderRightWidth
                ? `
                border-right: solid;
                border-right-width: ${borderWidth(
                    theme,
                    styles.borderRightWidth
                )};`
                : ''
        }

        ${
            styles.borderBottomWidth
                ? `
                border-bottom: solid;
                border-bottom-width: ${borderWidth(
                    theme,
                    styles.borderBottomWidth
                )};`
                : ''
        }

        ${
            styles.borderLeftWidth
                ? `
                border-left: solid;
                border-left-width: ${borderWidth(
                    theme,
                    styles.borderLeftWidth
                )};`
                : ''
        }

        ${
            styles.boxShadow
                ? `box-shadow: ${boxShadow(theme, styles.boxShadow)};`
                : ''
        }
    `
        : '';
