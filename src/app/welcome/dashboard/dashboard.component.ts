import { DashboarddataService } from './../../shared/dashboarddata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public doughnutChartLabels: any[] = [];
  public doughnutChartData: any[] = [];
  public doughnutChartType: any = 'doughnut';
  temp: any[] = [];

  // ['In Complete Calls', 'Interview', 'Final Round Interviews'];
  //  [710, 160, 130];

  constructor(private dashboardData: DashboarddataService) {
    this.bindtheData();
   }

  ngOnInit() {
  }


  public bindtheData() {

    this.dashboardData.getDashBoardData().subscribe(
      (data: any) => {
        this.temp = data.dashboarddata;
        this.temp.forEach(obj => {
         console.log(obj.label + ' '  + obj.data);
         this.doughnutChartLabels.push(obj.label);
         this.doughnutChartData.push(obj.data);
        });
        this.doughnutChartData.forEach( x => console.log('data' + x));
        this.doughnutChartLabels.forEach( x => console.log('labels' + x));
       });
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
