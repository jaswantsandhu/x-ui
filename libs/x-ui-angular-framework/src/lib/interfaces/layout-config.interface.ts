import { ComponentConfig } from "./component-config.interface";

export interface UIConfig {
  layout: LayoutConfig;
  components: ComponentConfig[];
}

export interface LayoutConfig {
  type: LayoutType;
  options?: GridOptions | FlexOptions | CustomLayoutOptions;
}

export interface GridOptions {
  columns: number;
  gap?: string;
  rowHeight?: string;
  columnWidth?: string;
}

export interface FlexOptions {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export interface CustomLayoutOptions {
  [key: string]: any;
}

export type LayoutType = "grid" | "flex" | "custom";
