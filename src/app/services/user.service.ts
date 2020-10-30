import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${this.URL}`);
  }

}
