import { NumberOrString, Size, Theme } from '../index';
import { getProperty } from '../get-property';

export const size = (theme: Theme, size: NumberOrString): Size =>
    getProperty<Size>(theme, 'sizes', size);
