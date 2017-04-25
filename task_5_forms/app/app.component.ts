import { Component, OnInit } from "@angular/core";
import { DataService } from "./shared/data.service";
import { User } from "./shared/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",  
    styleUrls: ['app.component.css'] 
}) 
export class AppComponent {
    constructor( private data: DataService, private formBuilder: FormBuilder ){}

    addItemForm: FormGroup;
    newUser: User = new User();
    items = this.data.getData();
    posts = ['student', 'worker', 'pensioner'];

    formErrors = {
        'name': '',
        'age': '',
        'post': ''
    }
    validatorsMassage = {
        'name': {
            'required': 'This field is required',
            'minlength': `Lenght must be at least 4 letters`
        },
        'age': {
            'required': 'This field is required',
            'pattern': 'only numbers'
        },
        'post': {
            'required': 'This field is required'
        }
    }
 
    
    ngOnInit() {
        this.addItemForm = this.formBuilder.group({
            'name': [this.newUser.name,  [
                Validators.minLength(4), 
                Validators.required ]
            ],
            'age': [this.newUser.age, [
                Validators.required,
                Validators.pattern("\\d+") ]
            ] ,
            'post': [this.newUser.post, [
                Validators.required ]
            ]  
        })

        this.addItemForm.valueChanges
                .subscribe(data => this.onValueChanges(data))
        
    }

    onValueChanges(data) {
        if(!this.addItemForm) return;
        let form = this.addItemForm;
        
        for (let field in this.formErrors) {
            this.formErrors[field] = '';
            let element = form.get(field);

            if (element && element.dirty && !element.valid) {
                let massage = this.validatorsMassage[field];
                
                for (let key in element.errors) {
                     this.formErrors[field] += massage[key]
                 }
            }
        }
    }

    addItem() {
        this.items.push({
            name: this.addItemForm.value.name,
            age: this.addItemForm.value.age,
            post: this.addItemForm.value.post
        }) 

        this.addItemForm.reset() 
    }  

}