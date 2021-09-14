import { ModalAddBalanceComponent } from './modal-add-balance/modal-add-balance.component';
import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label, MultiDataSet } from 'ng2-charts';
import * as Chart from 'chart.js';
import { formatNumber } from '@angular/common';
import { async } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // Doughnut
  public doughnutChartLabels: Label[] = ['Withdrawals', 'Balance'];
  public doughnutChartData: MultiDataSet = [[0, 0]];
  public doughnutChartType: ChartType = 'doughnut';
  public color: Color[] = [{ backgroundColor: ['#E94560', '#150050'] }];

  public currentBalance: number;
  public withdrawal: number[] = [];

  public remainingBalance: number;

  public option: ChartOptions = {
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 18,
      },
    },
  };

  private totalWithdrawal: number;

  constructor(
    public modalController: ModalController,
    @Inject(LOCALE_ID) public locale: string,
    public alertController: AlertController
  ) {}

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
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        if (data.data.type === 'balance') {
          this.addValueToBalance(data.data.value);
        } else {
          this.addValueToWithdrawals(data.data.value);
        }
      }
      /* if (data.data) {
        if (data.data.type === 'balance') {
          this.currentBalance = data.data.value;
          this.doughnutChartData[0][1] = this.currentBalance;
          this.chart.chart.update();
        } else {
          let calculateTotalWithdrawal = this.withdrawal.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          console.log('Calculate total withdrwa: ', calculateTotalWithdrawal);
          if(data.data.value <= this.currentBalance) {
            this.withdrawal.push(data.data.value);
            calculateTotalWithdrawal = this.withdrawal.reduce(
              (partialSum, a) => partialSum + a,
              0
            );
            this.totalWithdrawal = calculateTotalWithdrawal;
            console.log(this.totalWithdrawal);
            this.calculateBalance();
          } else {
            this.createAlert();
          }
        }

      } */
    });
    return await modal.present();
  }

  /*
  calculateBalance(): void {
    this.remainingBalance = this.currentBalance - this.totalWithdrawal;
    this.currentBalance = this.remainingBalance;
    const totalBalanceFormatted = formatNumber(
      this.remainingBalance,
      this.locale
    );
    console.log('Remaining balance: ', this.remainingBalance);
    //this.remainingBalance = formatNumber(this.actualBalance,this.locale);;
    this.doughnutChartData[0][1] = this.remainingBalance;
    this.chart.chart.update();
  } */

  private addValueToBalance(currentBalance: number): void {
    this.currentBalance = currentBalance;
    this.remainingBalance = currentBalance;
    this.doughnutChartData[0][1] = currentBalance;
    this.chart.chart.update();
  }

  private addValueToWithdrawals(currentWithdrawal: number): void {
    if (
      this.withdrawal.length === 0 &&
      currentWithdrawal <= this.remainingBalance
    ) {
      this.withdrawal.push(currentWithdrawal);
      this.totalWithdrawal = currentWithdrawal;
      this.remainingBalance = this.remainingBalance - currentWithdrawal;
      this.doughnutChartData[0][0] = this.totalWithdrawal;
      this.doughnutChartData[0][1] = this.remainingBalance;
      this.chart.chart.update();
    } else if(currentWithdrawal <= this.remainingBalance) {
      if (this.remainingBalance - currentWithdrawal >= 0) {
        this.withdrawal.push(currentWithdrawal);
        const calculateTotalWithdrawal = this.withdrawal.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        this.totalWithdrawal = calculateTotalWithdrawal;
        this.remainingBalance = this.remainingBalance - currentWithdrawal;
        this.doughnutChartData[0][0] = this.totalWithdrawal;
        this.doughnutChartData[0][1] = this.remainingBalance;
        this.chart.chart.update();
      } else {
        this.createAlert();
      }
    } else {
      this.createAlert();
    }
  }

  private async createAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Problem with your last withdrawals',
      message: 'Your withdrawals are too large for the balance you have',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
