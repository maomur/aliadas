import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosPageRoutingModule } from './misderechos-routing.module';

import { MisderechosPage } from './misderechos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosPageRoutingModule
  ],
  declarations: [MisderechosPage]
})
export class MisderechosPageModule {}
