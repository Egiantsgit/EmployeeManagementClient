import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistdataService {

constructor(private http: HttpClient) { }

getToDoListData(): any {
  return this.http.get('assets/todolist.json');
}

}
