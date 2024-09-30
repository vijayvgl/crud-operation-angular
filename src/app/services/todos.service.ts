import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  loadTodo(){
    return this.http.get(this.apiUrl);
  }
  saveTodo(tododata: any){
    return this.http.post(this.apiUrl, tododata);
  }
  editTodo(id: any){
    return this.http.get(this.apiUrl + '/' + id);
  }
  removeTodo(id:any){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
