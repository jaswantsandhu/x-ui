import { Component } from "@angular/core";
import { ComponentConfig } from "libs/x-ui-angular-framework/src/lib/interfaces/component-config.interface";
import {
  Colors,
  CrossAxisAlignment,
  MainAxisAlignment,
  TextDecoration,
  TextFontSize,
  TextFontWeight,
  TextLineHeight,
} from "@x-ui/x-ui-angular-framework";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "x-ui-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "x-ui-angular";

  constructor(private http: HttpClient) {}

  config: ComponentConfig = {
    type: "container",
    properties: {
      class: "container",
      backgroundColor: Colors.Azure,
      child: {
        type: "column",
        properties: {
          children: [
            {
              type: "container",
              properties: {
                class: "row",
                child: { type: "text", properties: { text: "1000" } },
              },
            },
          ],
        },
      },
    },
  };
}
