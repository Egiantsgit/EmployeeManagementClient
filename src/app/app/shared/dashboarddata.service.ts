import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboarddataService {

constructor(private http: HttpClient) { }


getDashBoardData(): any {
  return this.http.get('assets/dashboarddata.json');
}
}
