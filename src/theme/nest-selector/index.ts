import { Styles } from '../../styles';
import { ThemeObject } from '../index';

export const nestSelector = (
    object: ThemeObject<Styles>,
    nest: (
        value: [string, Styles],
        index: number,
        array: [string, Styles][]
    ) => unknown
): string => Object.entries(object).map(nest).join(' ').trim();
