/**
 * @module
 * Styles
 */

import * as CSS from 'csstype';

import { ColorOrColorGroup, NumberOrString, ThemeObject } from '../theme';

export * from './styles';
export * from './merge-styles';

export interface StyleMap {
    readonly styleName: string;
    readonly propertyName: string;
    readonly value?: NumberOrString;
    [K: string]: NumberOrString | undefined;
}

type CSSOmitBorderColor = Omit<CSS.StandardProperties, 'borderColor'>;

type CSSOmitBorderTopColor = Omit<CSSOmitBorderColor, 'borderTopColor'>;

type CSSOmitBorderRightColor = Omit<CSSOmitBorderTopColor, 'borderRightColor'>;

type CSSOmitBorderBottomColor = Omit<
    CSSOmitBorderRightColor,
    'borderBottomColor'
>;

type CSSOmitBorderLeftColor = Omit<CSSOmitBorderBottomColor, 'borderLeftColor'>;

type CSSBaseProperties = Omit<CSSOmitBorderLeftColor, 'backgroundColor'>;

export interface Styles extends CSSBaseProperties {
    readonly borderColor?: ColorOrColorGroup;
    readonly borderTopColor?: ColorOrColorGroup;
    readonly borderRightColor?: ColorOrColorGroup;
    readonly borderBottomColor?: ColorOrColorGroup;
    readonly borderLeftColor?: ColorOrColorGroup;
    readonly backgroundColor?: ColorOrColorGroup;
    readonly containerMinWidth?: CSS.Property.MinWidth<NumberOrString>;
    readonly sizeMinWidth?: CSS.Property.MinWidth<NumberOrString>;
    readonly containerMaxWidth?: CSS.Property.MaxWidth<NumberOrString>;
    readonly sizeMaxWidth?: CSS.Property.MaxWidth<NumberOrString>;
    readonly containerWidth?: CSS.Property.Width<NumberOrString>;
    readonly sizeWidth?: CSS.Property.Width<NumberOrString>;
    readonly containerMinHeight?: CSS.Property.MinHeight<NumberOrString>;
    readonly sizeMinHeight?: CSS.Property.MinHeight<NumberOrString>;
    readonly containerMaxHeight?: CSS.Property.MaxHeight<NumberOrString>;
    readonly sizeMaxHeight?: CSS.Property.MaxHeight<NumberOrString>;
    readonly containerHeight?: CSS.Property.Height<NumberOrString>;
    readonly sizeHeight?: CSS.Property.Height<NumberOrString>;
    readonly textColor?: ColorOrColorGroup;
    readonly marginX?:
        | CSS.Property.MarginLeft<NumberOrString>
        | CSS.Property.MarginRight<NumberOrString>;
    readonly marginY?:
        | CSS.Property.MarginTop<NumberOrString>
        | CSS.Property.MarginBottom<NumberOrString>;
    readonly paddingX?:
        | CSS.Property.PaddingLeft<NumberOrString>
        | CSS.Property.PaddingRight<NumberOrString>;
    readonly paddingY?:
        | CSS.Property.PaddingTop<NumberOrString>
        | CSS.Property.PaddingBottom<NumberOrString>;
    readonly breakpoints?: ThemeObject<Styles>;
    readonly pseudo?: ThemeObject<Styles>;
}
