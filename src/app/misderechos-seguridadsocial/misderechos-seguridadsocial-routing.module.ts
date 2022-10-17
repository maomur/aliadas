import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosSeguridadsocialPage } from './misderechos-seguridadsocial.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosSeguridadsocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosSeguridadsocialPageRoutingModule {}
