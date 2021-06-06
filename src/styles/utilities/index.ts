import { Styles } from '../index';
import { filterToProperties } from '../../theme/filter-to-properties';

export const withUtilities = (styles: Styles): string =>
    filterToProperties([
        {
            styleName: 'borderStyle',
            propertyName: 'border-style',
            value: styles.borderStyle
        },
        {
            styleName: 'borderTopStyle',
            propertyName: 'border-top-style',
            value: styles.borderTopStyle
        },
        {
            styleName: 'borderRightStyle',
            propertyName: 'border-right-style',
            value: styles.borderRightStyle
        },
        {
            styleName: 'borderBottomStyle',
            propertyName: 'border-bottom-style',
            value: styles.borderBottomStyle
        },
        {
            styleName: 'borderLeftStyle',
            propertyName: 'border-left-style',
            value: styles.borderLeftStyle
        },
        {
            styleName: 'textAlign',
            propertyName: 'text-align',
            value: styles.textAlign
        },
        {
            styleName: 'content',
            propertyName: 'content',
            value: styles.content
        },
        {
            styleName: 'cursor',
            propertyName: 'cursor',
            value: styles.cursor
        },
        {
            styleName: 'overflow',
            propertyName: 'overflow',
            value: styles.overflow
        },
        {
            styleName: 'overflowX',
            propertyName: 'overflow-x',
            value: styles.overflowX
        },
        {
            styleName: 'overflowY',
            propertyName: 'overflow-y',
            value: styles.overflowY
        },
        {
            styleName: 'opacity',
            propertyName: 'opacity',
            value: styles.opacity
        },
        {
            styleName: 'display',
            propertyName: 'display',
            value: styles.display
        },
        {
            styleName: 'flex',
            propertyName: 'flex',
            value: styles.flex
        },
        {
            styleName: 'flexWrap',
            propertyName: 'flex-wrap',
            value: styles.flexWrap
        },
        {
            styleName: 'listStyleType',
            propertyName: 'list-style-type',
            value: styles.listStyleType
        },
        {
            styleName: 'listStylePosition',
            propertyName: 'list-style-position',
            value: styles.listStylePosition
        },
        {
            styleName: 'position',
            propertyName: 'position',
            value: styles.position
        },
        {
            styleName: 'objectFit',
            propertyName: 'object-fit',
            value: styles.objectFit
        },
        {
            styleName: 'objectPosition',
            propertyName: 'object-position',
            value: styles.objectPosition
        },
        {
            styleName: 'top',
            propertyName: 'top',
            value: styles.top
        },
        {
            styleName: 'bottom',
            propertyName: 'bottom',
            value: styles.bottom
        },
        {
            styleName: 'right',
            propertyName: 'right',
            value: styles.right
        },
        {
            styleName: 'left',
            propertyName: 'left',
            value: styles.left
        }
    ]);
