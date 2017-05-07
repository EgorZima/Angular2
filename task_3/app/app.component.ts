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
    title: string;
    price: number;
    category: number;
    
    length = this.products.length;


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
        console.log('egsdbsdg')
        this.products.push(
            { 
              id: this.length + 1, 
              name: this.title, 
              price: this.price,
              category: this.category
            }
        )
    };

}