import { Styles } from '../index';
import { filterToProperties } from '../../utilities/filter-to-properties';

export const withUtilities = (styles: Styles): string =>
    filterToProperties([
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
    ]);
