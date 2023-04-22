import { CrossAxisAlignment, MainAxisAlignment } from "./axis-alignments.interface";
import { BaseComponentConfig, ComponentConfig } from "./component-config.interface";

export interface RowConfig extends BaseComponentConfig {
  type: "row";
  properties: {
    crossAxisAlignment?: CrossAxisAlignment;
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: "auto" | "min" | "max";
    children: ComponentConfig[];
    style?: { [key: string]: string | number }; // A style object with key-value pairs for CSS properties
    class?: string | string[] | { [key: string]: boolean };
  };
}
