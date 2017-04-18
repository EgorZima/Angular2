import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    getData() {
        return [
        {  name : 'product 1', price : 100 },
        {  name : 'product 2', price : 200 },
        {  name : 'product 3', price : 300 },
        {  name : 'product 4', price : 400 },
        {  name : 'product 5', price : 500 },
        {  name : 'product 6', price : 600 },
        {  name : 'product 7', price : 700 },
        {  name : 'product 8', price : 800 },
        {  name : 'product 9', price : 900 },
        {  name: 'product 10', price: 1000 }
    ];
    }
   
}