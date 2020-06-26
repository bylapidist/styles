import {
    BorderRadius,
    BorderStyle,
    BorderWidth,
    BoxShadow,
    ColorOrColorGroup,
    Cursor,
    FontFamily,
    FontSize,
    FontWeight,
    LetterSpacing,
    LineHeight,
    Margin,
    NumberOrString,
    Opacity,
    Overflow,
    Padding,
    TextAlign,
    ThemeObject,
    ThemeObjects,
    WidthOrHeight
} from '../theme';

export * from './styles';

export type AnyStyleObject = ThemeObjects | ThemeObject<Styles> | undefined;

export interface StyleMap {
    readonly styleName: string;
    readonly propertyName: string;
    readonly value?: NumberOrString;
    [K: string]: NumberOrString | undefined;
}

export interface Styles {
    readonly fontSize?: FontSize;
    readonly fontFamily?: FontFamily;
    readonly fontWeight?: FontWeight;
    readonly lineHeight?: LineHeight;
    readonly letterSpacing?: LetterSpacing;
    readonly borderRadius?: BorderRadius;
    readonly borderWidth?: BorderWidth;
    readonly borderTopWidth?: BorderWidth;
    readonly borderRightWidth?: BorderWidth;
    readonly borderBottomWidth?: BorderWidth;
    readonly borderLeftWidth?: BorderWidth;
    readonly borderStyle?: BorderStyle;
    readonly borderTopStyle?: BorderStyle;
    readonly borderRightStyle?: BorderStyle;
    readonly borderBottomStyle?: BorderStyle;
    readonly borderLeftStyle?: BorderStyle;
    readonly borderColor?: ColorOrColorGroup;
    readonly borderTopColor?: ColorOrColorGroup;
    readonly borderRightColor?: ColorOrColorGroup;
    readonly borderBottomColor?: ColorOrColorGroup;
    readonly borderLeftColor?: ColorOrColorGroup;
    readonly backgroundColor?: ColorOrColorGroup;
    readonly textColor?: ColorOrColorGroup;
    readonly boxShadow?: BoxShadow;
    readonly width?: WidthOrHeight;
    readonly minWidth?: WidthOrHeight;
    readonly maxWidth?: WidthOrHeight;
    readonly containerMinWidth?: WidthOrHeight;
    readonly sizeMinWidth?: WidthOrHeight;
    readonly containerMaxWidth?: WidthOrHeight;
    readonly sizeMaxWidth?: WidthOrHeight;
    readonly containerWidth?: WidthOrHeight;
    readonly sizeWidth?: WidthOrHeight;
    readonly height?: WidthOrHeight;
    readonly minHeight?: WidthOrHeight;
    readonly maxHeight?: WidthOrHeight;
    readonly containerMinHeight?: WidthOrHeight;
    readonly sizeMinHeight?: WidthOrHeight;
    readonly containerMaxHeight?: WidthOrHeight;
    readonly sizeMaxHeight?: WidthOrHeight;
    readonly containerHeight?: WidthOrHeight;
    readonly sizeHeight?: WidthOrHeight;
    readonly textAlign?: TextAlign;
    readonly margin?: Margin;
    readonly marginX?: Margin;
    readonly marginY?: Margin;
    readonly marginTop?: Margin;
    readonly marginRight?: Margin;
    readonly marginBottom?: Margin;
    readonly marginLeft?: Margin;
    readonly padding?: Padding;
    readonly paddingX?: Padding;
    readonly paddingY?: Padding;
    readonly paddingTop?: Padding;
    readonly paddingRight?: Padding;
    readonly paddingBottom?: Padding;
    readonly paddingLeft?: Padding;
    readonly cursor?: Cursor;
    readonly overflow?: Overflow;
    readonly overflowX?: Overflow;
    readonly overflowY?: Overflow;
    readonly opacity?: Opacity;
    readonly breakpoints?: ThemeObject<Styles>;
    readonly pseudo?: ThemeObject<Styles>;
    [K: string]: AnyStyleObject;
}
