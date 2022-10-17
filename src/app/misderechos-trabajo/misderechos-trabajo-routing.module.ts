import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisderechosTrabajoPage } from './misderechos-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: MisderechosTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisderechosTrabajoPageRoutingModule {}
