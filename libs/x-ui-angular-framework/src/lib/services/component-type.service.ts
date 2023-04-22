import { Injectable } from "@angular/core";
import { ColumnComponent } from "../components/column/column.component";
import { ContainerComponent } from "../components/container/container.component";
import { RowComponent } from "../components/row/row.component";
import { TextComponent } from "../components/text/text.component";
import { ListingComponent } from "../components/listing/listing.component";

@Injectable({
  providedIn: "root",
})
export class ComponentTypeService {
  constructor() {}

  getComponentType(type: string): any {
    switch (type) {
      case "column":
        return ColumnComponent;
      case "container":
        return ContainerComponent;
      case "row":
        return RowComponent;
      case "text":
        return TextComponent;
      case "listing":
        return ListingComponent;
      default:
        return null;
    }
  }
}
