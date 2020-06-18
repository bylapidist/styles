import { Styles } from './index';
import { breakpoint, size, width, Theme } from '../theme';

export const withLayout = (theme: Theme, styles?: Styles): string =>
    styles
        ? `
        ${styles.width ? `width: ${width(theme, styles.width)};` : ''}

        ${styles.minWidth ? `min-width: ${width(theme, styles.minWidth)};` : ''}

        ${styles.maxWidth ? `max-width: ${width(theme, styles.maxWidth)};` : ''}

        ${
            styles.containerWidth
                ? `max-width: ${breakpoint(theme, styles.containerWidth)};`
                : ''
        }

        ${styles.sizeWidth ? `width: ${size(theme, styles.sizeWidth)};` : ''}

        ${styles.height ? `height: ${width(theme, styles.height)};` : ''}

        ${
            styles.minHeight
                ? `min-height: ${width(theme, styles.minHeight)};`
                : ''
        }

        ${
            styles.maxHeight
                ? `max-height: ${width(theme, styles.maxHeight)};`
                : ''
        }

        ${
            styles.containerHeight
                ? `max-height: ${breakpoint(theme, styles.containerHeight)};`
                : ''
        }

        ${styles.sizeHeight ? `height: ${size(theme, styles.sizeHeight)};` : ''}

        ${styles.margin ? `margin: ${size(theme, styles.margin)};` : ''}

        ${styles.marginX ? `margin-left: ${size(theme, styles.marginX)};` : ''}

        ${styles.marginX ? `margin-right: ${size(theme, styles.marginX)};` : ''}

        ${styles.marginY ? `margin-top: ${size(theme, styles.marginY)};` : ''}

        ${
            styles.marginY
                ? `margin-bottom: ${size(theme, styles.marginY)};`
                : ''
        }

        ${
            styles.marginTop
                ? `margin-top: ${size(theme, styles.marginTop)};`
                : ''
        }

        ${
            styles.marginRight
                ? `margin-right: ${size(theme, styles.marginRight)};`
                : ''
        }

        ${
            styles.marginBottom
                ? `margin-bottom: ${size(theme, styles.marginBottom)};`
                : ''
        }

        ${
            styles.marginLeft
                ? `margin-left: ${size(theme, styles.marginLeft)};`
                : ''
        }

        ${styles.padding ? `padding: ${size(theme, styles.padding)};` : ''}

        ${
            styles.paddingX
                ? `padding-left: ${size(theme, styles.paddingX)};`
                : ''
        }

        ${
            styles.paddingX
                ? `padding-right: ${size(theme, styles.paddingX)};`
                : ''
        }

        ${
            styles.paddingY
                ? `padding-top: ${size(theme, styles.paddingY)};`
                : ''
        }

        ${
            styles.paddingY
                ? `padding-bottom: ${size(theme, styles.paddingY)};`
                : ''
        }

        ${
            styles.paddingTop
                ? `padding-top: ${size(theme, styles.paddingTop)};`
                : ''
        }

        ${
            styles.paddingRight
                ? `padding-right: ${size(theme, styles.paddingRight)};`
                : ''
        }

        ${
            styles.paddingBottom
                ? `padding-bottom: ${size(theme, styles.paddingBottom)};`
                : ''
        }

        ${
            styles.paddingLeft
                ? `padding-left: ${size(theme, styles.paddingLeft)};`
                : ''
        }
    `
        : '';
