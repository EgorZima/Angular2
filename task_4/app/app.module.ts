import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";

import { ProductsModule } from './products/products.module'
import { DataService } from "./shared/data.service"


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductsModule
    ],
    declarations: [AppComponent, HomeComponent, AdminComponent],
    bootstrap: [AppComponent],
    providers: [DataService]
})
export class AppModule { }
