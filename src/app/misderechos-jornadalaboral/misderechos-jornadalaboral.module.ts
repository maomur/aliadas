import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosJornadalaboralPageRoutingModule } from './misderechos-jornadalaboral-routing.module';

import { MisderechosJornadalaboralPage } from './misderechos-jornadalaboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosJornadalaboralPageRoutingModule
  ],
  declarations: [MisderechosJornadalaboralPage]
})
export class MisderechosJornadalaboralPageModule {}
