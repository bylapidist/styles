import * as CSS from 'csstype';
import { Color, ColorGroup, NumberOrString, ThemeObject } from '../theme';

export interface StyleMap {
    readonly styleName: string;
    readonly propertyName: string;
    readonly value?: NumberOrString;
    [K: string]: NumberOrString | undefined;
}

export interface Styles {
    readonly fontSize?: CSS.FontSizeProperty<NumberOrString>;
    readonly fontFamily?: CSS.FontFamilyProperty;
    readonly fontWeight?: CSS.FontWeightProperty;
    readonly lineHeight?: CSS.LineHeightProperty<NumberOrString>;
    readonly letterSpacing?: CSS.LetterSpacingProperty<NumberOrString>;
    readonly borderRadius?: CSS.BorderRadiusProperty<NumberOrString>;
    readonly borderWidth?: CSS.BorderWidthProperty<NumberOrString>;
    readonly borderTopWidth?: CSS.BorderTopWidthProperty<NumberOrString>;
    readonly borderRightWidth?: CSS.BorderRightWidthProperty<NumberOrString>;
    readonly borderBottomWidth?: CSS.BorderBottomWidthProperty<NumberOrString>;
    readonly borderLeftWidth?: CSS.BorderLeftWidthProperty<NumberOrString>;
    readonly borderStyle?: CSS.BorderBlockStyleProperty;
    readonly borderTopStyle?: CSS.BorderTopStyleProperty;
    readonly borderRightStyle?: CSS.BorderRightStyleProperty;
    readonly borderBottomStyle?: CSS.BorderBottomStyleProperty;
    readonly borderLeftStyle?: CSS.BorderLeftStyleProperty;
    readonly borderColor?: ColorGroup | Color;
    readonly borderTopColor?: ColorGroup | Color;
    readonly borderRightColor?: ColorGroup | Color;
    readonly borderBottomColor?: ColorGroup | Color;
    readonly borderLeftColor?: ColorGroup | Color;
    readonly backgroundColor?: ColorGroup | Color;
    readonly textColor?: ColorGroup | Color;
    readonly boxShadow?: CSS.BoxShadowProperty;
    readonly width?: CSS.WidthProperty<NumberOrString>;
    readonly minWidth?: CSS.WidthProperty<NumberOrString>;
    readonly maxWidth?: CSS.WidthProperty<NumberOrString>;
    readonly containerWidth?: CSS.WidthProperty<NumberOrString>;
    readonly sizeWidth?: CSS.WidthProperty<NumberOrString>;
    readonly height?: CSS.HeightProperty<NumberOrString>;
    readonly minHeight?: CSS.HeightProperty<NumberOrString>;
    readonly maxHeight?: CSS.HeightProperty<NumberOrString>;
    readonly containerHeight?: CSS.HeightProperty<NumberOrString>;
    readonly sizeHeight?: CSS.HeightProperty<NumberOrString>;
    readonly textAlign?: CSS.TextAlignProperty;
    readonly margin?: CSS.MarginProperty<NumberOrString>;
    readonly marginX?: CSS.MarginProperty<NumberOrString>;
    readonly marginY?: CSS.MarginProperty<NumberOrString>;
    readonly marginTop?: CSS.MarginTopProperty<NumberOrString>;
    readonly marginRight?: CSS.MarginRightProperty<NumberOrString>;
    readonly marginBottom?: CSS.MarginBottomProperty<NumberOrString>;
    readonly marginLeft?: CSS.MarginLeftProperty<NumberOrString>;
    readonly padding?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingX?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingY?: CSS.PaddingProperty<NumberOrString>;
    readonly paddingTop?: CSS.PaddingTopProperty<NumberOrString>;
    readonly paddingRight?: CSS.PaddingRightProperty<NumberOrString>;
    readonly paddingBottom?: CSS.PaddingBottomProperty<NumberOrString>;
    readonly paddingLeft?: CSS.PaddingLeftProperty<NumberOrString>;
    readonly cursor?: CSS.CursorProperty;
    readonly overflow?: CSS.OverflowProperty;
    readonly overflowX?: CSS.OverflowXProperty;
    readonly overflowY?: CSS.OverflowYProperty;
    readonly breakpoints?: ThemeObject<Styles>;
    readonly pseudo?: ThemeObject<Styles>;
    // TODO: better type integration with Theme
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [K: string]: any;
}

export * from './base';
export * from './borders';
export * from './breakpoints';
export * from './colors';
export * from './layout';
export * from './media-queries';
export * from './nesting';
export * from './styles';
export * from './typography';
export * from './utilities';
