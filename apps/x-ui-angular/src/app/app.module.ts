import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { XUiAngularFrameworkModule } from "@x-ui/x-ui-angular-framework";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, XUiAngularFrameworkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
