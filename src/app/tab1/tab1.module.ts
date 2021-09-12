import { HomeModule } from './../features/home/home.module';
import { TopBarComponent } from './../core/top-bar/top-bar.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HomeModule
  ],
  declarations: [Tab1Page, TopBarComponent]
})
export class Tab1PageModule {}
