import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosBeneficiosPageRoutingModule } from './misderechos-beneficios-routing.module';

import { MisderechosBeneficiosPage } from './misderechos-beneficios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosBeneficiosPageRoutingModule
  ],
  declarations: [MisderechosBeneficiosPage]
})
export class MisderechosBeneficiosPageModule {}
