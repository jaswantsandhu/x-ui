import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { ComponentConfig } from "../../interfaces/component-config.interface";
import { ComponentTypeService } from "../../services/component-type.service";

@Component({
  selector: "app-scaffold",
  template: "<ng-container #componentHost></ng-container>",
})
export class ScaffoldComponent implements OnInit {
  @Input() config!: ComponentConfig;
  @Input() data?: any;
  @ViewChild("componentHost", { read: ViewContainerRef, static: true })
  componentHost!: ViewContainerRef;

  constructor(private componentTypes: ComponentTypeService) {}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    this.componentHost.clear();
    const componentType = this.componentTypes.getComponentType(
      this.config.type
    );

    if (componentType) {
      const componentRef = this.componentHost.createComponent(componentType);
      (componentRef.instance as any).config = this.config;
      if (this.data) {
        (componentRef.instance as any).data = this.data;
      }
    }
  }
}
