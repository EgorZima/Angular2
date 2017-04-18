import { Component } from "@angular/core";
import { DataService } from "../../shared/data.service"
import { Product } from "../../shared/product";
import { Router } from "@angular/router"

@Component({
    moduleId: module.id,
    selector: "products",
    templateUrl: "products-list.html",
    styleUrls: ["products-list.component.css"] 
}) 
export class ProductsListComponent {

    constructor( private dataService: DataService, 
                 private router: Router ) {}

    products = this.dataService.getData();

    onSelect(selected: Product) {
        this.router.navigate(["/products", selected.id]);
    }
}