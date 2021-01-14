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
        }
    ]);
