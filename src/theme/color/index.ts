import { Color, ColorGroup, Theme } from '../index';

export const color = (theme: Theme, color: ColorGroup): Color => {
    if (
        theme.colors &&
        theme.colors[color.group] &&
        theme.colors[color.group][color.shade]
    ) {
        return theme.colors[color.group][color.shade];
    }

    throw new Error(
        `${color.group} or ${color.shade} does not exist on theme.colors`
    );
};
