import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductsListComponent,
        ProductDetailsComponent,
        ProductsHomeComponent
    ]
})
export class ProductsModule{
}