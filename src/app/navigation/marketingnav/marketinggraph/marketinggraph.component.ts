import { Component, OnInit } from '@angular/core';
import { PayrolldataService } from '../../../shared/payrolldata.service';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-marketinggraph',
  templateUrl: './marketinggraph.component.html',
  styleUrls: ['./marketinggraph.component.css']
})
export class MarketinggraphComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");

  }
  
  // ADD CHART OPTIONS. 
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    options: {
      scales: {
        xAxes: [{
          gridLines: {
            color: 'balck',
            gridThickness:5,
            lineWidth: 20
          }
        }],
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  gridThickness:5,
              }
          }]
      }
  }
  };
  

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Numbers Per Month',
      data: [27, 37, 47, 57, 67, 77, 82, 77, 97, 87, 97, 87] 
    },
    
  ];

  // CHART COLOR.
  colors = [
    
    { 
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
}

