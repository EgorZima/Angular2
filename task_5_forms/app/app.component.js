"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./shared/data.service");
var user_1 = require("./shared/user");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(data, formBuilder) {
        this.data = data;
        this.formBuilder = formBuilder;
        this.newUser = new user_1.User();
        this.items = this.data.getData();
        this.posts = ['student', 'worker', 'pensioner'];
        this.formErrors = {
            'name': '',
            'age': '',
            'post': ''
        };
        this.validatorsMassage = {
            'name': {
                'required': 'This field is required',
                'minlength': "Lenght must be at least 4 letters"
            },
            'age': {
                'required': 'This field is required',
                'pattern': 'only numbers'
            },
            'post': {
                'required': 'This field is required'
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addItemForm = this.formBuilder.group({
            'name': [this.newUser.name, [
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.required
                ]
            ],
            'age': [this.newUser.age, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("\\d+")
                ]
            ],
            'post': [this.newUser.post, [
                    forms_1.Validators.required
                ]
            ]
        });
        this.addItemForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanges(data); });
    };
    AppComponent.prototype.onValueChanges = function (data) {
        if (!this.addItemForm)
            return;
        var form = this.addItemForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var element = form.get(field);
            if (element && element.dirty && !element.valid) {
                var massage = this.validatorsMassage[field];
                for (var key in element.errors) {
                    this.formErrors[field] += massage[key];
                }
            }
        }
    };
    AppComponent.prototype.addItem = function () {
        this.items.push({
            name: this.addItemForm.value.name,
            age: this.addItemForm.value.age,
            post: this.addItemForm.value.post
        });
        this.addItemForm.reset();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-app",
        templateUrl: "app.component.html",
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map