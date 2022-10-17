import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaentidadesPage } from './guiaentidades.page';

const routes: Routes = [
  {
    path: '',
    component: GuiaentidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiaentidadesPageRoutingModule {}
