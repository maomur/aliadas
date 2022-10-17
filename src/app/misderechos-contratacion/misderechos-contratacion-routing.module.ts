import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosContratacionPage } from './misderechos-contratacion.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosContratacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosContratacionPageRoutingModule {}
