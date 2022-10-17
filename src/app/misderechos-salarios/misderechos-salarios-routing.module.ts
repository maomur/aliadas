import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosSalariosPage } from './misderechos-salarios.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosSalariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosSalariosPageRoutingModule {}
