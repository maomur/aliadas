import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosSeguridadsocialPageRoutingModule } from './misderechos-seguridadsocial-routing.module';

import { MisderechosSeguridadsocialPage } from './misderechos-seguridadsocial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosSeguridadsocialPageRoutingModule
  ],
  declarations: [MisderechosSeguridadsocialPage]
})
export class MisderechosSeguridadsocialPageModule {}
