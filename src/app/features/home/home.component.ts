import { ModalAddBalanceComponent } from './modal-add-balance/modal-add-balance.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Withdrawals', 'Balance'];
  public doughnutChartData: MultiDataSet = [[450, 1000]];
  public doughnutChartType: ChartType = 'doughnut';
  public color: Color[] = [{ backgroundColor: ['#E94560', '#150050'] }];

  public option: ChartOptions = {
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 18,
      },
    },
  };

  constructor(public modalController: ModalController) {}

  ngOnInit(): void {}

  public addBalance(): void {
    this.presentModal('balance');
  }
  public addBudget(): void {
    this.presentModal('budget');
  }

  async presentModal(type: string) {
    const modal = await this.modalController.create({
      component: ModalAddBalanceComponent,
      componentProps: {
        type,
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        const value = data.data; // Here's your selected user!
        console.log(value);
    });
    return await modal.present();
  }
}
