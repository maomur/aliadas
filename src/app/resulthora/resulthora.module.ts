import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResulthoraPageRoutingModule } from './resulthora-routing.module';

import { ResulthoraPage } from './resulthora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResulthoraPageRoutingModule
  ],
  declarations: [ResulthoraPage]
})
export class ResulthoraPageModule {}
