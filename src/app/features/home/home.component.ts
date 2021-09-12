import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Withdrawals', 'Balance'];
 public doughnutChartData: MultiDataSet = [
   [450, 1000],
 ];
 public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }
}
