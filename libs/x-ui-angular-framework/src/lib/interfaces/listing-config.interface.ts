import { Observable } from "rxjs";
import {
  BaseComponentConfig,
  ComponentConfig,
} from "./component-config.interface";
import { TextConfig } from "./text-config.interface";

export interface ListingConfig extends BaseComponentConfig {
  type: "listing";
  properties: {
    dataSource: any[] | Observable<any[]>;
    builder(snapshot: any, index: number): ComponentConfig;
    pageSize?: number;
    filterFn?: (data: any[], searchText: string) => any[];
    noResultsText?: string;
    emptyStateTemplate?: ComponentConfig;
    header?: TextConfig;
    pagination?: boolean;
    style?: { [key: string]: string | number };
    filter?: {
      label: TextConfig;
      placeholder: string;
    };
  };
}
