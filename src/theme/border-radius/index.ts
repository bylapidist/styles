import { BorderRadius, NumberOrString, Theme } from '../index';

export const borderRadius = (
    theme: Theme,
    borderRadius: NumberOrString
): BorderRadius => {
    if (theme.borderRadii && theme.borderRadii[borderRadius]) {
        return theme.borderRadii[borderRadius];
    }

    throw new Error(`${borderRadius} does not exist on theme.borderRadii`);
};
