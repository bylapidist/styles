import { Styles } from './index';
import {
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    Theme
} from '../theme';

export const withTypography = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${
            styles.fontSize
                ? `font-size: ${fontSize(theme, styles.fontSize)};`
                : ''
        }

        ${
            styles.fontWeight
                ? `font-weight: ${fontWeight(theme, styles.fontWeight)};`
                : ''
        }

        ${
            styles.fontFamily
                ? `font-family: ${fontFamily(theme, styles.fontFamily)};`
                : ''
        }

        ${
            styles.lineHeight
                ? `line-height: ${lineHeight(theme, styles.lineHeight)};`
                : ''
        }

        ${
            styles.letterSpacing
                ? `letter-spacing: ${letterSpacing(
                      theme,
                      styles.letterSpacing
                  )};`
                : ''
        }
    `
        : '';
