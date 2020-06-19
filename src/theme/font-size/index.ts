import { FontSize, getProperty, NumberOrString, Theme } from '../index';

export const fontSize = (theme: Theme, fontSize: NumberOrString): FontSize =>
    getProperty<FontSize>(theme, 'fontSizes', fontSize);
