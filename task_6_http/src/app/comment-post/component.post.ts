import { Input, Component, OnInit } from '@angular/core';
import { CommentsService } from "../shared/comments.service"; 
import { Comment } from "../shared/comment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ListComponent } from "../comments-list/component.list";

@Component({
  selector: 'components-post',
  templateUrl: './component.post.html',
  styleUrls: ['../app.component.css']
})
export class PostComponent {
    commentForm: FormGroup;
    list: ListComponent;
    currentComment = {
        id : '',
        userName: '',
        commentText: '',
        date: ''
    };
    errorMessage: string;

    constructor( private service: CommentsService,
                 private fb: FormBuilder
        
    ){}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.commentForm = this.fb.group({
            name: ['', Validators.required],
            text: ['', Validators.required]
        });
    }

    postNewComment(commentForm: FormGroup) {
        this.currentComment.userName = commentForm.value.name;
        this.currentComment.commentText = commentForm.value.text;
        this.currentComment.date = this.getDate();

        this.commentForm.reset() 

        this.service.addComment(this.currentComment)
                .subscribe(    
                    error => this.errorMessage = error
                );
    }

    getDate() {
        let date = new Date();
        let days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']

        let day = days[date.getDay()]
        let dateDay = date.getDate().toString();
    
        return day + dateDay;    
    }



        
  
}
