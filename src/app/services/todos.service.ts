import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _url: string = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url:);
  }

}
