import { NumberOrString, Theme, Width } from '../index';

export const width = (theme: Theme, width: NumberOrString): Width => {
    if (theme.widths && theme.widths[width]) {
        return theme.widths[width];
    }

    throw new Error(`${width} does not exist on theme.widths`);
};
