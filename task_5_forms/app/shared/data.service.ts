import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    users = [
        {  name : 'John', age: 14, post: 'student' },
        {  name : 'Liza', age : 32, post: 'worker' },
        {  name : 'Anna', age : 78, post: 'pensioner' },
    ];

    getData() {
        return  this.users;
    }
   
}