import { Component, Input, OnInit } from "@angular/core";
import { ListingConfig } from "../../interfaces/listing-config.interface";
import { isObservable } from "rxjs";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.scss"]
})
export class ListingComponent implements OnInit {
  @Input() config!: ListingConfig;
  dataSource!: any[];
  builder!: ListingConfig["properties"]["builder"];

  ngOnInit(): void {
    const trueDataSource = this.config.properties.dataSource;
    if (isObservable(trueDataSource)) {
      trueDataSource.subscribe((snapshot) => {
        this.dataSource = snapshot;
      });
    } else {
      this.dataSource = trueDataSource;
    }
    this.builder = this.config.properties.builder;
  }
}
