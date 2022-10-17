import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosEnfermedadesPageRoutingModule } from './misderechos-enfermedades-routing.module';

import { MisderechosEnfermedadesPage } from './misderechos-enfermedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosEnfermedadesPageRoutingModule
  ],
  declarations: [MisderechosEnfermedadesPage]
})
export class MisderechosEnfermedadesPageModule {}
