import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Product } from "../../shared/product";
import { DataService } from "../../shared/data.service"

@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.html"   
}) 
export class ProductDetailsComponent {
    product: Product;

    constructor( private router: Router,
                 private activatedRoute: ActivatedRoute,
                 private data : DataService) {}   

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.product = this.data.getProduct(id);
        })
    }  

             
}