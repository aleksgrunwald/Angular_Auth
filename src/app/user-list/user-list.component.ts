import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent {

todos = ["shopping", "feed the cats"];

addToDo(inputValue) {
    if(this.todos.indexOf(inputValue) == -1) {
      this.todos.push(inputValue);
    };
    console.log(this.todos)
    console.log(this.todos.indexOf(inputValue))
  }

}
