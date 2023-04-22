export interface TextStyle {
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontStyle?: string;
  textDecoration?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  textAlign?: string;
}

export interface TextConfig {
  type: "text";
  properties: {
    text: string;
    style?: TextStyle;
    class?: string | string[] | { [key: string]: boolean };
  };
}

export enum TextColor {
  Default = "inherit",
  Primary = "var(--color-primary)",
  Secondary = "var(--color-secondary)",
  Success = "var(--color-success)",
  Danger = "var(--color-danger)",
  Warning = "var(--color-warning)",
}

export enum TextFontFamily {
  Default = "inherit",
  SansSerif = "sans-serif",
  Serif = "serif",
  Monospace = "monospace",
}

export enum TextFontSize {
  Default = "inherit",
  Small = "0.875rem",
  Medium = "1rem",
  Large = "1.25rem",
  ExtraLarge = "1.5rem",
}

export enum TextFontStyle {
  Normal = "normal",
  Italic = "italic",
  Oblique = "oblique",
}

export enum TextFontWeight {
  Normal = "normal",
  Bold = "bold",
  Bolder = "bolder",
  Lighter = "lighter",
}

export enum TextLetterSpacing {
  Normal = "normal",
  Tight = "-0.05em",
  Loose = "0.05em",
}

export enum TextLineHeight {
  Normal = "normal",
  Compact = "1.25",
  Loose = "1.5",
}

export enum TextAlign {
  Left = "left",
  Center = "center",
  Right = "right",
  Justify = "justify",
}

export enum TextDecoration {
  None = "none",
  Underline = "underline",
  Overline = "overline",
  LineThrough = "line-through",
}

export enum TextOverflow {
  Ellipsis = "ellipsis",
  Clip = "clip",
}

export enum TextTransform {
  None = "none",
  Uppercase = "uppercase",
  Lowercase = "lowercase",
  Capitalize = "capitalize",
}

export enum TextWhiteSpace {
  Normal = "normal",
  NoWrap = "nowrap",
  Pre = "pre",
  PreWrap = "pre-wrap",
  PreLine = "pre-line",
}
