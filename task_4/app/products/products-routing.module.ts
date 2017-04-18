import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsHomeComponent } from "./products-home/products-home.component";


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: "",
            redirectTo: "/products",
            pathMatch: "full"
        },
        {
                path: "products",
                component: ProductsHomeComponent, 
                children: [
                    {
                        path: "",
                        component: ProductsListComponent,
                        children: [
                            {
                                path: ":id",
                                component: ProductDetailsComponent
                            },
                            {
                                path: "",
                                component: ProductDetailsComponent
                            }
                        ]
                    }
                ]
            }
    ])],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}