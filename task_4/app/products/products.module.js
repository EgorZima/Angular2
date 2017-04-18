"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var products_home_component_1 = require("./products-home/products-home.component");
var products_list_component_1 = require("./products-list/products-list.component");
var product_details_component_1 = require("./product-details/product-details.component");
var products_routing_module_1 = require("./products-routing.module");
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            products_routing_module_1.ProductsRoutingModule
        ],
        declarations: [
            products_list_component_1.ProductsListComponent,
            product_details_component_1.ProductDetailsComponent,
            products_home_component_1.ProductsHomeComponent
        ]
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map