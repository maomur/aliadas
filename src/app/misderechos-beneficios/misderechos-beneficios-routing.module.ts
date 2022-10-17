import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosBeneficiosPage } from './misderechos-beneficios.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosBeneficiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosBeneficiosPageRoutingModule {}
