import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPotsByUserId(id): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
