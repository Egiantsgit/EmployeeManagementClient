import { TodolistdataService } from './../../shared/todolistdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todoTasks: any[];
overdueTasks: any[];

  constructor(private listData: TodolistdataService) { }

  ngOnInit() {
    this.listData.getToDoListData().subscribe(
      (data: any) => {
        this.todoTasks = data.todotasks;
        this.overdueTasks = data.overduetasks;
      }
    );
  }

}
