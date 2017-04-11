"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyTableComponent = (function () {
    function MyTableComponent() {
        this.products = Products;
    }
    MyTableComponent.prototype.delete = function (item) {
        var index = item.id;
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    return MyTableComponent;
}());
MyTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-table",
        templateUrl: "my-table.component.html",
        styleUrls: ["my-table.component.css"]
    })
], MyTableComponent);
exports.MyTableComponent = MyTableComponent;
//# sourceMappingURL=my-table.component.js.map