import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrealiadasPageRoutingModule } from './sobrealiadas-routing.module';

import { SobrealiadasPage } from './sobrealiadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrealiadasPageRoutingModule
  ],
  declarations: [SobrealiadasPage]
})
export class SobrealiadasPageModule {}
