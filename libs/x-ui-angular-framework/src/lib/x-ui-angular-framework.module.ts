import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ColumnComponent } from "./components/column/column.component";
import { BuilderComponent } from "./components/builder/builder.component";
import { ContainerComponent } from "./components/container/container.component";
import { TextComponent } from "./components/text/text.component";
import { RowComponent } from "./components/row/row.component";
import { FormsModule } from "@angular/forms";
import { ListingComponent } from "./components/listing/listing.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ColumnComponent,
    BuilderComponent,
    ContainerComponent,
    TextComponent,
    RowComponent,
    ListingComponent,
  ],
  exports: [BuilderComponent],
})
export class XUiAngularFrameworkModule {}
