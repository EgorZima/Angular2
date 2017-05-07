import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommentsService } from "./shared/comments.service";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListComponent } from './comments-list/component.list';
import { PostComponent } from './comment-post/component.post';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
