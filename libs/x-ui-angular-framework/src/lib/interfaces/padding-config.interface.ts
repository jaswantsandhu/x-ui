import { BaseComponentConfig, ComponentConfig } from "./component-config.interface";

export interface PaddingConfig extends BaseComponentConfig {
  type: "padding";
  properties: {
    padding: string | number;
    child: ComponentConfig;
  };
}