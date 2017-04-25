"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getData = function () {
        return [
            { name: 'product 1', price: 100 },
            { name: 'product 2', price: 200 },
            { name: 'product 3', price: 300 },
            { name: 'product 4', price: 400 },
            { name: 'product 5', price: 500 },
            { name: 'product 6', price: 600 },
            { name: 'product 7', price: 700 },
            { name: 'product 8', price: 800 },
            { name: 'product 9', price: 900 },
            { name: 'product 10', price: 1000 }
        ];
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map