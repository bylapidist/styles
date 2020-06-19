import { Styles } from '../index';

export const withUtilities = (styles: Styles): string => {
    return [
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
        }
    ]
        .filter((styleMaps) => styleMaps.value)
        .map((styleMap) => `${styleMap.propertyName}: ${styleMap.value};`)
        .join('');
};
