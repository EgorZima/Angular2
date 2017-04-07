import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloListComponent } from './hello-list/hello-list.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HelloListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
