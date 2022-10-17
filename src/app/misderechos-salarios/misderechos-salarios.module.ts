import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosSalariosPageRoutingModule } from './misderechos-salarios-routing.module';

import { MisderechosSalariosPage } from './misderechos-salarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosSalariosPageRoutingModule
  ],
  declarations: [MisderechosSalariosPage]
})
export class MisderechosSalariosPageModule {}
