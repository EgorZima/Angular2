import { Component } from '@angular/core';

const PHRASES = [
    { value: "Hello World", language: "English" },
    { value: "Привет Мир", language: "Russian" },
    { value: "Привіт Світ", language: "Ukrainian" },
    { value: "Hola Mundo", language: "Spanish" },
    { value: "Bonjour le monde", language: "French" },
    { value: "Hallo Welt", language: "German" },
    { value: "Ciao mondo", language: "Italian" },
    { value: "Witaj świecie", language: "Polish" },
    { value: "Hej världen", language: "Swdish" },
    { value: "Pozdravljen, svet", language: "Slovenian" },
    { value: "Прывітанне Сусвет", language: "Belarusian" }
];

@Component({
    selector: 'hello-list',
    templateUrl: "app/hello-list/hello-list.component.html",
    styleUrls: ["app/hello-list/hello-list.component.css"]
})
export class HelloListComponent {
    PhraseList = PHRASES;
}