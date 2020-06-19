import { getProperty, NumberOrString, Size, Theme } from '../index';

export const size = (theme: Theme, size: NumberOrString): Size =>
    getProperty<Size>(theme, 'sizes', size);
