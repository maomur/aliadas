import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultdiaPageRoutingModule } from './resultdia-routing.module';

import { ResultdiaPage } from './resultdia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultdiaPageRoutingModule
  ],
  declarations: [ResultdiaPage]
})
export class ResultdiaPageModule {}
