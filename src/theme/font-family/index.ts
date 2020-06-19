import { FontFamily, NumberOrString, Theme } from '../index';
import { getProperty } from '../get-property';

export const fontFamily = (
    theme: Theme,
    fontFamily?: NumberOrString
): FontFamily => {
    const value: string[] = getProperty<Array<FontFamily>>(
        theme,
        'fontFamilies',
        fontFamily
    );

    if (value.join) {
        return value.join(', ');
    }

    return (value as unknown) as string;
};
