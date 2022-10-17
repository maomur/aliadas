import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiaentidadesPageRoutingModule } from './guiaentidades-routing.module';

import { GuiaentidadesPage } from './guiaentidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiaentidadesPageRoutingModule
  ],
  declarations: [GuiaentidadesPage]
})
export class GuiaentidadesPageModule {}
