import { StyleMap } from '../../styles';

export const filterToProperties = (styles: StyleMap[]): string =>
    styles
        .filter((styleMaps) => styleMaps.value)
        .map((styleMap) => `${styleMap.propertyName}: ${styleMap.value};`)
        .join('');
