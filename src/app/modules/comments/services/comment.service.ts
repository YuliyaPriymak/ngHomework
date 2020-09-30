import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../../../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentsByPostId(id: string): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
