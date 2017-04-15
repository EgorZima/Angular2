import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
}) 
export class AppComponent {
    constructor( private dataService: DataService) {};

    products = this.dataService.getData();
    value:number = 500;
    choice;
    title: string = '';
    price: number = 0;
    category: number = 0;

    settings = {
        red: 'red',
        price: 'darkgoldenrod'
    };

    delete(item) {
        let index = this.products.indexOf(item);
          
        if (index > -1) {
             this.products.splice(index, 1);
        }     
    };


    add() {
        this.products.push(
            { 
              id: this.products.length + 1, 
              name: this.title, 
              price: this.price,
              category: this.category
            }
        )
    };

}