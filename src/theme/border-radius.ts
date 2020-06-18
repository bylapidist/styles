import * as CSS from 'csstype';
import { NumberOrString, Theme } from './index';

export const borderRadius = (
    theme: Theme,
    borderRadius: NumberOrString
): CSS.BorderRadiusProperty<NumberOrString> => {
    if (theme.borderRadii && theme.borderRadii[borderRadius]) {
        return theme.borderRadii[borderRadius];
    }

    throw new Error(`${borderRadius} does not exist on theme.borderRadii`);
};
