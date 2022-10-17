import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosLicenciasPageRoutingModule } from './misderechos-licencias-routing.module';

import { MisderechosLicenciasPage } from './misderechos-licencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosLicenciasPageRoutingModule
  ],
  declarations: [MisderechosLicenciasPage]
})
export class MisderechosLicenciasPageModule {}
