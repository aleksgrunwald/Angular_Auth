import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  todos = [];

  addToDo(inputValue) {
    if(this.todos.indexOf(inputValue) == -1) {
      this.todos.push(inputValue);
    };
    console.log(this.todos)
    console.log(this.todos.indexOf(inputValue))
  }

}
