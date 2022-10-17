import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosEnfermedadesPage } from './misderechos-enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosEnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosEnfermedadesPageRoutingModule {}
