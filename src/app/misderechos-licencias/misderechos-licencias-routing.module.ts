import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosLicenciasPage } from './misderechos-licencias.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosLicenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosLicenciasPageRoutingModule {}
