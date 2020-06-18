import * as CSS from 'csstype';
import { NumberOrString, Theme } from '../index';

export const color = (
    theme: Theme,
    group: NumberOrString,
    shade: NumberOrString
): CSS.ColorProperty => {
    if (theme.colors && theme.colors[group] && theme.colors[group][shade]) {
        return theme.colors[group][shade];
    }

    throw new Error(`${group} or ${shade} does not exist on theme.colors`);
};
