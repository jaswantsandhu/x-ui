import { ColumnConfig } from "./column-config.interface";
import { ContainerConfig } from "./container-config.interface";
import { ListingConfig } from "./listing-config.interface";
import { PaddingConfig } from "./padding-config.interface";
import { RowConfig } from "./row-config.interface";
import { TextConfig } from "./text-config.interface";

export interface BaseComponentConfig {
  type: string;
  properties: { [key: string]: any };
}

export type ComponentConfig =
  | ColumnConfig
  | RowConfig
  | PaddingConfig
  | ContainerConfig
  | TextConfig
  | ListingConfig;
