import deepMerge from 'lodash.merge';
import { Theme } from '../../theme';

export const mergeThemes = (
    theme1?: Theme,
    theme2?: Theme
): Theme | undefined => deepMerge(theme1, theme2);
