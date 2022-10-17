import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisderechosTrabajoPageRoutingModule } from './misderechos-trabajo-routing.module';

import { MisderechosTrabajoPage } from './misderechos-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisderechosTrabajoPageRoutingModule
  ],
  declarations: [MisderechosTrabajoPage]
})
export class MisderechosTrabajoPageModule {}
