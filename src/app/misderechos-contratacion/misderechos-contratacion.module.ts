import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosContratacionPageRoutingModule } from './misderechos-contratacion-routing.module';

import { MisderechosContratacionPage } from './misderechos-contratacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosContratacionPageRoutingModule
  ],
  declarations: [MisderechosContratacionPage]
})
export class MisderechosContratacionPageModule {}
