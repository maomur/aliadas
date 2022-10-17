import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaacosoPageRoutingModule } from './violenciaacoso-routing.module';

import { ViolenciaacosoPage } from './violenciaacoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaacosoPageRoutingModule
  ],
  declarations: [ViolenciaacosoPage]
})
export class ViolenciaacosoPageModule {}
