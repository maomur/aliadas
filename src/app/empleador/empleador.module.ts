import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadorPageRoutingModule } from './empleador-routing.module';

import { EmpleadorPage } from './empleador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadorPageRoutingModule
  ],
  declarations: [EmpleadorPage]
})
export class EmpleadorPageModule {}
