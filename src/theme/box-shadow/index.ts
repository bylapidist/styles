import { BoxShadow, getProperty, NumberOrString, Theme } from '../index';

export const boxShadow = (theme: Theme, boxShadow: NumberOrString): BoxShadow =>
    getProperty<BoxShadow>(theme, 'boxShadows', boxShadow);
