import { Component, Input } from "@angular/core";
import { ColumnConfig } from "../../interfaces/column-config.interface";

@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.scss"],
})
export class ColumnComponent {
  @Input() config!: ColumnConfig;
}
