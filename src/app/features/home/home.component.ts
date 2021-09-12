import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Withdrawals', 'Balance'];
 public doughnutChartData: MultiDataSet = [
   [450, 1000],
 ];
 public doughnutChartType: ChartType = 'doughnut';
 public color: Color[] = [
   {backgroundColor: ['#E94560', '#150050']}
 ];

 public option: ChartOptions = {
  legend: {
      labels: {
          fontColor: 'white',
          fontSize: 18
      }
  }
};

  constructor() { }

  ngOnInit(): void {
  }
}
