import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraPageRoutingModule } from './calculadora-routing.module';

import { CalculadoraPage } from './calculadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CalculadoraPage]
})
export class CalculadoraPageModule { }
