import { BaseComponentConfig, ComponentConfig } from "./component-config.interface";

export interface ContainerConfig extends BaseComponentConfig {
  type: "container";
  properties: {
    width?: string | number;
    height?: string | number;
    margin?: string | number;
    padding?: string | number;
    backgroundColor?: string;
    child?: ComponentConfig;
    style?: { [key: string]: string | number }; // A style object with key-value pairs for CSS properties
    class?: string | string[] | { [key: string]: boolean };
  };
}