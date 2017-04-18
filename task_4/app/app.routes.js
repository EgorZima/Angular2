"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var products_component_1 = require("./products/products.component");
var admin_component_1 = require("./admin/admin.component");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    {
        path: "products",
        component: products_component_1.ProductsComponent
    },
    {
        path: "admin",
        component: admin_component_1.AdminComponent
    }
];
//# sourceMappingURL=app.routes.js.map