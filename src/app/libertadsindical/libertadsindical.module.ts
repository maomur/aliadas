import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibertadsindicalPageRoutingModule } from './libertadsindical-routing.module';

import { LibertadsindicalPage } from './libertadsindical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibertadsindicalPageRoutingModule
  ],
  declarations: [LibertadsindicalPage]
})
export class LibertadsindicalPageModule {}
