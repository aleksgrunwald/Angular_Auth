import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'

import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent {

 todosFromServer: any[];

 constructor(private _todosService: TodosService){}

 ngOnInit() {
    this._todosService.getTodos().subscribe((data) => {
      this.todosFromServer = data
      console.log(this.todosFromServer)
    });
  }

  todos = ["shopping", "feed the cats"];

  addToDo(inputValue) {
      if(this.todos.indexOf(inputValue) == -1) {
        this.todos.push(inputValue);
      };
      console.log(this.todos)
      console.log(this.todos.indexOf(inputValue))
    }

}
