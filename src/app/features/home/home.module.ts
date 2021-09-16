import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { ModalAddBalanceComponent } from './modal-add-balance/modal-add-balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ModalAddBalanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
