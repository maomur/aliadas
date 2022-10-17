import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciaacosoPage } from './violenciaacoso.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciaacosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciaacosoPageRoutingModule {}
