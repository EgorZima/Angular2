import { Injectable } from "@angular/core";
import { Http, Response } from  "@angular/http";
import { Comment } from "./comment"

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CommentsService {
    private url = "http://localhost:2403/comments"

    constructor( private http: Http) {}

    public getComments(): Observable<Comment[]> {
        let comments = this.http.get(this.url)
                        .map(this.recoveryData)
                        .catch(this.handleError)
        return comments
    }

    private recoveryData(response: Response) {
        let res = response.json();
        let comments: Comment[] = [];

        for (let i = 0; i < res.length; i++) {
            comments.push(new Comment(res[i].id, res[i].userName, res[i].commentText, res[i].date))
        }
        return comments
    }

    addComment(comment: Comment) {
         return this.http.post(this.url, comment)
            .catch(this.handleError);
    }

    public deleteComment(comment) {
        return this.http.delete(this.url + "/" + comment.id)
            .catch(this.handleError);
    }

    private handleError(error: any, cought: Observable<any>):any {
        console.log('error')
    }

    
}