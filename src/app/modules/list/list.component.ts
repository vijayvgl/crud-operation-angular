import { Component } from '@angular/core';
import {TodosService} from '../../services/todos.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  todoData : any = [];

  constructor(private service: TodosService){
    this.loadTodos();
  }

  loadTodos(){
    this.service.loadTodo().subscribe(data => {
      this.todoData = data;
    });
  }

}
