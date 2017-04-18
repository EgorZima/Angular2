"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_list_component_1 = require("./products-list/products-list.component");
var product_details_component_1 = require("./product-details/product-details.component");
var products_home_component_1 = require("./products-home/products-home.component");
var ProductsRoutingModule = (function () {
    function ProductsRoutingModule() {
    }
    return ProductsRoutingModule;
}());
ProductsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild([
                {
                    path: "",
                    redirectTo: "/products",
                    pathMatch: "full"
                },
                {
                    path: "products",
                    component: products_home_component_1.ProductsHomeComponent,
                    children: [
                        {
                            path: "",
                            component: products_list_component_1.ProductsListComponent,
                            children: [
                                {
                                    path: ":id",
                                    component: product_details_component_1.ProductDetailsComponent
                                },
                                {
                                    path: "",
                                    component: product_details_component_1.ProductDetailsComponent
                                }
                            ]
                        }
                    ]
                }
            ])],
        exports: [router_1.RouterModule]
    })
], ProductsRoutingModule);
exports.ProductsRoutingModule = ProductsRoutingModule;
//# sourceMappingURL=products-routing.module.js.map