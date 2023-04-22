import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ColumnComponent } from "./components/column/column.component";
import { ScaffoldComponent } from "./components/scaffold/scaffold.component";
import { ContainerComponent } from "./components/container/container.component";
import { TextComponent } from "./components/text/text.component";
import { RowComponent } from "./components/row/row.component";
import { ListingComponent } from "./components/listing/listing.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ColumnComponent,
    ScaffoldComponent,
    ContainerComponent,
    TextComponent,
    RowComponent,
    ListingComponent,
  ],
  exports: [ScaffoldComponent],
})
export class XUiAngularFrameworkModule {}
