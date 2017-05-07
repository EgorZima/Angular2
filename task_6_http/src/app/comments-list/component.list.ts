import { Component } from '@angular/core';
import { CommentsService } from "../shared/comments.service"; 
import { Comment } from "../shared/comment";

@Component({
  selector: 'components-list',
  templateUrl: './component.list.html',
  styleUrls: ['../app.component.css']
})
export class ListComponent {
  constructor(private service: CommentsService) {}

  comments = [];
  errorMessage;

  ngOnInit() {
      this.getData();
  }

  getData() {
      this.service.getComments().subscribe(
        comments => this.comments = comments
      )
  }

  deleteComment(comment) {
    this.service.deleteComment(comment).subscribe(
            error => this.errorMessage = error
    );
  }

  refresh() {
    this.getData();
  }
}
