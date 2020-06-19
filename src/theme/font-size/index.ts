import { FontSize, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const fontSize = (theme: Theme, fontSize?: NumberOrString): FontSize =>
    getProperty<FontSize>(theme, 'fontSizes', fontSize);
