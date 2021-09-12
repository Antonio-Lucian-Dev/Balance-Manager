import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { ModalAddBalanceComponent } from './modal-add-balance/modal-add-balance.component';




@NgModule({
  declarations: [
    HomeComponent,
    ModalAddBalanceComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule, ChartsModule],
  exports: [HomeComponent]
})
export class HomeModule { }
