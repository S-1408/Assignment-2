import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }


  url = 'https://jsonplaceholder.typicode.com/users';

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
