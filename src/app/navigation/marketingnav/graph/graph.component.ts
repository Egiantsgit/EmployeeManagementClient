import { PayrolldataService } from './../../../shared/payrolldata.service';
import { Component, OnInit } from '@angular/core';
import { HeightScaler } from '../../../../../node_modules/ag-grid/dist/lib/rendering/heightScaler';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#219DE5',
      borderColor: '#437DA0',
      pointBackgroundColor: '#437DA0',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#437DA0',
      
      
    },
   ];

  public barChartLabels: string[] = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Agu', 'Sept', 'Oct', 'Nov', 'Dec'];
  public barChartType: any = 'bar';
  public barChartLegend: any = false;

  public barChartData: any[] = [
     {data: [28, 45, 40, 19, 66, 27, 90, 70, 55, 66, 70, 30], label: 'Series A'}
  ];
  constructor(private payrollData: PayrolldataService) { }

  ngOnInit() {
    this.payrollData.getPayrollData().subscribe(
      (data: any) => {
        this.barChartData.push(data);
      },
      (err: any) => {
        console.log('Could not find the data');
      }
    );

  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  
  }


