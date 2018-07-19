import { PayrolldataService } from './../../shared/payrolldata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            color: 'balck',
            lineWidth: 20
          }
        }],
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  };
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#437DA0',
      borderColor: '#437DA0',
      pointBackgroundColor: '#437DA0',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#437DA0'
    },
   ];

  public barChartLabels: string[] = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Agu', 'Sept', 'Oct', 'Nov', 'Dec'];
  public barChartType: any = 'bar';
  public barChartLegend: any = true;

  public barChartData: any[] = [
     {data: [28, 48, 40, 19, 86, 27, 90, 70, 55, 66, 70, 30], label: 'Series A'}
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

  // public randomize(): void {
  //   // Only Change 3 values
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   const clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


