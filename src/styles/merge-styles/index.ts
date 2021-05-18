import deepMerge from 'lodash.merge';
import { Styles } from '../index';

export const mergeStyles = (
    styles1?: Styles,
    styles2?: Styles
): Styles | undefined => deepMerge(styles1, styles2);
