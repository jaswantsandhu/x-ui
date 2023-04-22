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

@Component({
  selector: "x-ui-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "x-ui-angular";

  config: ComponentConfig = {
    type: "container",
    properties: {
      margin: 10,
      backgroundColor: "blue",
      height: 100,
      padding: 10,
      child: {
        type: "column",
        properties: {
          children: [
            {
              type: "listing",
              properties: {
                dataSource: [],
                itemComponent: {
                  type: "text",
                  properties: {
                    text: "1",
                  },
                },
              },
            },
            {
              type: "row",
              properties: {
                mainAxisAlignment: MainAxisAlignment.FlexEnd,
                crossAxisAlignment: CrossAxisAlignment.FlexEnd,
                children: [
                  {
                    type: "text",
                    properties: {
                      text: "hello world",
                      style: {
                        color: Colors.Aquamarine,
                        fontWeight: TextFontWeight.Bolder,
                        fontSize: TextFontSize.ExtraLarge,
                        lineHeight: TextLineHeight.Compact,
                        textDecoration: TextDecoration.Underline,
                      },
                    },
                  },
                  {
                    type: "text",
                    properties: {
                      text: "hello world",
                      style: {
                        color: "red",
                      },
                    },
                  },
                  {
                    type: "text",
                    properties: {
                      text: "hello world",
                      style: {
                        color: "yellow",
                      },
                    },
                  },
                  {
                    type: "text",
                    properties: {
                      text: "hello world",
                      style: {
                        color: "pink",
                      },
                    },
                  },
                ],
              },
            },
            {
              type: "text",
              properties: {
                text: "Hello",
              },
            },
            {
              type: "text",
              properties: {
                text: "hell djadkad",
              },
            },
          ],
        },
      },
    },
  };
}
