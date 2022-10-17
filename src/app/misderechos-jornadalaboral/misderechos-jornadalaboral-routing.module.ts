import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosJornadalaboralPage } from './misderechos-jornadalaboral.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosJornadalaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosJornadalaboralPageRoutingModule {}
