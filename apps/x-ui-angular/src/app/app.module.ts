import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { XUiAngularFrameworkModule } from "@x-ui/x-ui-angular-framework";


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
