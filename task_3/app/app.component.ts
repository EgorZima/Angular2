import { Component } from "@angular/core";

let Products = [
    { id: 1, name : 'product 1', price : 100, category: 1 },
    { id: 2, name : 'product 2', price : 200, category: 2 },
    { id: 3, name : 'product 3', price : 300, category: 3 },
    { id: 4, name : 'product 4', price : 400, category: 1 },
    { id: 5, name : 'product 5', price : 500, category: 2 },
    { id: 6, name : 'product 6', price : 600, category: 3 },
    { id: 7, name : 'product 7', price : 700, category: 1 },
    { id: 8, name : 'product 8', price : 800, category: 2 },
    { id: 9, name : 'product 9', price : 900, category: 3 },
    { id: 10, name: 'product 10', price: 1000,category: 1 }
];


@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    products = Products;
    value = 500;
    choice;
    title;
    price;
    category;
    
    settings = {
        red: 'red',
        price: 'darkgoldenrod'
    }

    delete(item) {
        let index = this.products.indexOf(item);
          
        if (index > -1) {
             this.products.splice(index, 1);
        }     
    }

    add() {
        this.products.push(
            { 
              id: this.products.length + 1, 
              name: this.title, 
              price: this.price,
              category: this.category
            }
        )
    }

}